import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import { MdUnfoldMore } from "react-icons/md";
import { PiClockClockwiseBold } from "react-icons/pi";
import { RiFileList2Fill } from "react-icons/ri";
import { SiGooglegemini } from "react-icons/si";
import { TiMicrophone } from "react-icons/ti";

interface ChatInputBarProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
}

const ChatInputBar: React.FC<ChatInputBarProps> = ({
  input,
  setInput,
  onSend,
}) => {
  return (
    <div className="border-t border-gray-300 bg-white">
      {/* Input and Send */}
      <div className="flex px-6 pt-4 pb-2">
        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Message..."
          className="flex-1 bg-transparent focus:outline-none placeholder-gray-500 text-sm"
        />
        {/* Send */}
        <button onClick={onSend} className="pr-2">
          <IoSend className="text-md text-green-700 active:scale-95" />
        </button>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between px-6 pt-2 pb-4">
        {/* Icons */}
        <div className="flex items-center gap-3 text-gray-600 text-md">
          <button>
            <ImAttachment />
          </button>
          <button>
            <BsEmojiSmile />
          </button>
          <button>
            <FiClock />
          </button>
          <button>
            <PiClockClockwiseBold />
          </button>
          <button>
            <SiGooglegemini />
          </button>
          <button>
            <RiFileList2Fill/>
          </button>
          <button>
            <TiMicrophone/>
          </button>
        </div>

        {/* Dropdown */}

        <div className="flex items-center gap-12 px-2 py-1 border border-gray-300 rounded-sm">
          <div className="flex gap-1">
            <img
              src="/periskope_logo.png"
              alt="Periskope"
              className="w-4 h-4"
            />
            <p className="text-[10px] pb-0.5 font-semibold">Periskope</p>
          </div>
          <MdUnfoldMore className="text-gray-400 text-xs" />
        </div>
      </div>
    </div>
  );
};

export default ChatInputBar;
