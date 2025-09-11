import React from "react";

function ChatPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Chat with Us</h2>
      <p>Our assistant is here to help you.</p>

      <df-messenger
        project-id="playbook-dev-439004"
        agent-id="0b68b637-7a38-40a4-8e68-587eb73c8d80"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat chat-title="Alphanio"></df-messenger-chat>
      </df-messenger>

      <style>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 0;
          right: 0;
          top: 0;
          width: 25%;
        }
      `}</style>
    </div>
  );
}

export default ChatPage;
