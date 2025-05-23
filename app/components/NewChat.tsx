"use client";

import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/supabaseClient";
import { useApp } from "../context/AppContext";
import { Chat } from "./ChatList";
import { TbMessageCirclePlus } from "react-icons/tb";

type User = {
  id: string;
  name: string;
  avatar_url: string;
};

const NewChat = () => {
  const supabase = createClient();
  const { setSelectedChat, setChats } = useApp();
  const [showSheet, setShowSheet] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>("");

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error && data.user) setCurrentUserId(data.user.id);
    };
    getCurrentUser();
  }, []);

  const openSheet = async () => {
    setShowSheet(true);

    const { data: usersData, error } = await supabase
      .from("users")
      .select("id, name, avatar_url");

    if (usersData) {
      const filtered = usersData.filter((u) => u.id !== currentUserId);
      setUsers(filtered);
    }
  };

  const handleStartChat = async (otherUser: User) => {
    if (!currentUserId) return;

    const { data: existingChats } = await supabase
      .from("chats")
      .select("id, user1_id, user2_id")
      .or(
        `and(user1_id.eq.${currentUserId},user2_id.eq.${otherUser.id}),and(user1_id.eq.${otherUser.id},user2_id.eq.${currentUserId})`
      )
      .limit(1);

    if (existingChats && existingChats.length > 0) {
      const existingChat: Chat = {
        id: existingChats[0].id,
        other_user: otherUser,
      };
      setSelectedChat(existingChat);
      setShowSheet(false);
      return;
    }

    const { data, error } = await supabase
      .from("chats")
      .insert([{ user1_id: currentUserId, user2_id: otherUser.id }])
      .select("id")
      .single();

    if (data) {
      const newChat: Chat = {
        id: data.id,
        other_user: otherUser,
      };
      setSelectedChat(newChat);
      setChats((prev) => [...prev, newChat]);
    }

    setShowSheet(false);
  };

  return (
    <>
      <button
        onClick={openSheet}
        className="fixed flex items-center justify-center bottom-6 left-96 bg-green-700 h-10 w-10 text-white rounded-full text-xl shadow-lg hover:bg-green-600 transition-all"
        title="New Chat"
      >
        <TbMessageCirclePlus className="text-white" />
      </button>

      {showSheet && (
        <div className="absolute bottom-0 w-full z-50 max-h-[70vh] rounded-t-2xl bg-gray-200 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-lg font-semibold">Start a new chat</h2>
            <button
              onClick={() => setShowSheet(false)}
              className="text-gray-500"
            >
              ✕
            </button>
          </div>

          {/* Scrollable user list */}
          <div className="overflow-y-auto flex-1 px-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => handleStartChat(user)}
                className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer rounded-md"
              >
                <img
                  src={user.avatar_url || "/default_avatar.jpg"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover bg-gray-300"
                />
                <div>
                  <p className="font-medium text-sm">{user.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewChat;
