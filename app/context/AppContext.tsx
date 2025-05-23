"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Chat } from "../components/ChatList";


type AppContextType = {
  selectedNavButton: string | null;
  setSelectedNavButton: Dispatch<SetStateAction<string | null>>;
  selectedChat: Chat | null;
  setSelectedChat: Dispatch<SetStateAction<Chat | null>>;
  chats: Chat[];
  setChats: Dispatch<SetStateAction<Chat[]>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [selectedNavButton, setSelectedNavButton] = useState<string | null>(
    "messages"
  );
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [chats, setChats] = useState<Chat[]>([]);

  return (
    <AppContext.Provider
      value={{
        selectedNavButton,
        setSelectedNavButton,
        selectedChat,
        setSelectedChat,
        chats,
        setChats
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

