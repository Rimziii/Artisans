import React from "react";

export default function SidePanel() {
  return (
    <aside className="side">
      <div className="panel">
        <h3>Quick Actions</h3>
        <button className="small-btn">+ Upload Product</button>
        <button className="small-btn">WhatsApp Bot</button>
        <button className="small-btn">View Insights</button>
      </div>
      <div className="panel">
        <h3>AI Chat</h3>
        <div className="chat-box"></div>
        <div className="chat-input">
          <input placeholder="Ask in your language..." />
          <button className="small-btn">Send</button>
        </div>
      </div>
      <div className="panel">
        <h3>Delivery</h3>
        <button className="small-btn">Choose Partner</button>
      </div>
      <div className="panel">
        <h3>Analytics</h3>
        <ul>
          <li>Eco tags increased clicks by 22%</li>
          <li>Best seller: Handwoven basket</li>
        </ul>
      </div>
    </aside>
  );
}
