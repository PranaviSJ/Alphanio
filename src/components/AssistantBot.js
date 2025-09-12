import React, { useState } from "react";
import "./AssistantBot.css";

const AssistantBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="assistant-bot">
      {/* Floating Bot Icon */}
      {!isOpen && (
        <button
          className="bot-icon"
          onClick={() => setIsOpen(true)}
        >
          💬
        </button>
      )}

      {/* Popup with animation */}
      <div className={`bot-popup ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <>
            {/* Close button */}
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Dialogflow Messenger */}
            <link
              rel="stylesheet"
              href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
            />
            <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>

            <df-messenger
              project-id="playbook-dev-439004"
              agent-id="0b68b637-7a38-40a4-8e68-587eb73c8d80"
              language-code="en"
              max-query-length="-1"
            >
              <df-messenger-chat chat-title="Alphanio"></df-messenger-chat>
            </df-messenger>
          </>
        )}
      </div>
    </div>
  );
};

export default AssistantBot;
