"use client";

import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/supabaseClient";
import { useApp } from "../context/AppContext";
import NewChat from "./NewChat";
import Filter from "./Filter";

type User = {
  id: string;
  name: string;
  avatar_url: string;
};

export type Chat = {
  id: string;
  other_user: User;
};

const ChatList = () => {
  const supabase = createClient();
  const { selectedChat, setSelectedChat, chats, setChats } = useApp();

  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const loadChats = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError || !user) return;

      setUserId(user.id);

      // Fetch chats where the user is either user1 or user2
      const { data: chatsData, error } = await supabase
        .from("chats")
        .select(
          "id, user1_id, user2_id, user1:user1_id(id, name, avatar_url), user2:user2_id(id, name, avatar_url)"
        )
        .or(`user1_id.eq.${user.id},user2_id.eq.${user.id}`);

      if (error || !chatsData) {
        console.error("Error fetching chats:", error?.message);
        return;
      }

      const parsedChats: Chat[] = chatsData.map((chat: any) => {
        const isUser1 = chat.user1_id === user.id;
        const otherUser = isUser1 ? chat.user2 : chat.user1;

        return {
          id: chat.id,
          other_user: otherUser,
        };
      });

      setChats(parsedChats);
    };

    loadChats();
  }, []);

  return (
    <div className="h-full w-[400px] relative flex flex-col border-r  border-gray-300">
      <Filter />
      
      <div className="flex-1 w-full overflow-y-auto">
        {chats.map((chat) => {
          const isSelected = selectedChat?.id === chat.id;
          const { name, avatar_url } = chat.other_user;

          return (
            <div
              key={chat.id}
              className={`flex items-center gap-3 p-3 cursor-pointer transition-all ${
                isSelected ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <img
                src={avatar_url || "/default_avatar.png"}
                alt="avatar"
                className="w-8 h-8 rounded-full bg-gray-300 object-cover"
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium">{name || "Unknown"}</p>
                <p className="text-xs text-gray-500">Private Chat</p>
              </div>
            </div>
          );
        })}
      </div>
      <NewChat />
    </div>
  );
};

export default ChatList;
