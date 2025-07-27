import { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const toggleSidebar = () => {
    setExtended(!extended);
  };
  const { onSent, prevPrompts, newChat, setRecentPrompt } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    // Sidebar Menu
    <div className="sidebar">
      {/* Top section */}
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt=""
          onClick={toggleSidebar}
        />
        {/* New Chat button */}
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : <></>}
        </div>
        {/* Recent chats */}
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent Chats</p>
            {prevPrompts.map((prompt, index) => (
              <div
                onClick={() => loadPrompt(prompt)}
                className="recent-entry"
                key={index}
              >
                <img src={assets.message_icon} alt="" />
                <p>{prompt.slice(0, 20)}...</p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* Bottom section */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : <></>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : <></>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
