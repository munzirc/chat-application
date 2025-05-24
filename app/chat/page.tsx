import React from "react";
import LeftNavbar from "../components/LeftNavBar";
import TopBar from "../components/TopBar";
import RightNavBar from "../components/RightNavBar";
import ChatList from "../components/ChatList";
import MessageView from "../components/MessageView";

const ChatDashboard = async () => {
  
  return (
    <main className="relative min-h-screen">
      <LeftNavbar/>
      <TopBar />
      <RightNavBar />

      <div className="absolute top-13 left-[53px] right-[45px] bottom-0 flex bg-white">
        <ChatList />
        <MessageView />
      </div>

    </main>
  );
};

export default ChatDashboard;
