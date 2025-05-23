"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "../utils/supabase/supabaseClient";
import { useApp } from "../context/AppContext";
import { FiPaperclip, FiSmile, FiSend } from "react-icons/fi";
import { BsThreeDotsVertical, BsSearch, BsStars } from "react-icons/bs";
import dayjs from "dayjs";
import ChatInputBar from "./ChatInputBar";

type User = {
  id: string;
  name: string;
  avatar_url: string;
};

type Message = {
  id: string;
  sender_id: string;
  content: string;
  chat_id: string;
  created_at: string;
};

const MessageViewer = () => {
  const supabase = createClient();
  const { selectedChat } = useApp();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user && !error) setCurrentUserId(data.user.id);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!selectedChat || !currentUserId) return;

    const fetchMessages = async () => {
      const { data } = await supabase
        .from("messages")
        .select("*")
        .eq("chat_id", selectedChat.id)
        .order("created_at", { ascending: true });

      if (data) setMessages(data);
    };

    fetchMessages();
  }, [selectedChat, currentUserId]);

  useEffect(() => {
    if (!selectedChat) return;

    const channel = supabase
      .channel(`messages-chat-${selectedChat.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chat_id=eq.${selectedChat.id}`,
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages((prev) => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedChat]);

  const sendMessage = async () => {
    if (!input.trim() || !selectedChat || !currentUserId) return;

    await supabase.from("messages").insert([
      {
        chat_id: selectedChat.id,
        sender_id: currentUserId,
        content: input.trim(),
      },
    ]);

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!selectedChat)
    return (
      <div
        style={{
          backgroundImage: 'url("/message_bg.jpg")',
          backgroundRepeat: "repeat",
        backgroundSize: "370px 700px",
        }}
        className="flex-1 flex items-center justify-center text-4xl font-bold text-gray-300"
      >
        Start a conversation...
      </div>
    );

  const formatDate = (date: string) => dayjs(date).format("DD-MM-YYYY");

  let lastDate = "";

  return (
    <div
      className="flex flex-col h-full flex-1"
      style={{
        backgroundImage: 'url("/message_bg.jpg")',
        backgroundRepeat: "repeat",
        backgroundSize: "400px 650px",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300 bg-white">
        <img
          src={selectedChat.other_user.avatar_url}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1">
          <p className="font-medium">{selectedChat.other_user.name}</p>
        </div>
        <div className="flex gap-3 text-gray-500 text-sm">
          <BsStars />
          <BsSearch />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 text-sm">
        {messages.map((msg, idx) => {
          const currentDate = formatDate(msg.created_at);
          const showDate = currentDate !== lastDate;
          lastDate = currentDate;
          const isMe = msg.sender_id === currentUserId;

          return (
            <div key={msg.id}>
              {showDate && (
                <div className="text-center my-4 text-gray-500 text-xs">
                  {currentDate}
                </div>
              )}
              <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                <div
                  className={`relative max-w-[70%] px-3 py-2 rounded-lg mb-1 shadow-sm ${
                    isMe
                      ? "bg-green-100 rounded-br-none"
                      : "bg-white rounded-bl-none"
                  }`}
                >
                  <p>{msg.content}</p>

                  {/* Arrow bubble */}
                  <span
                    className={`absolute w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ${
                      isMe
                        ? "border-l-[8px] border-l-green-100 right-[-7px] bottom-0"
                        : "border-r-[8px] border-r-white left-[-7px] bottom-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInputBar input={input} setInput={setInput} onSend={sendMessage} />
    </div>
  );
};

export default MessageViewer;
