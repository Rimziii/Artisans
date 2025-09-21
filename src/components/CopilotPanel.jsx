import React from "react";
import './CopilotPanel.css';

export default function CopilotPanel() {
  return (
    <div className="copilot-panel">
      <h3>🧑‍💻 Artisans Copilot AI</h3>
      <div className="copilot-section">
        <button className="copilot-btn">Automate Product Upload</button>
        <span className="copilot-status">[Voice-to-Text, Image Enhancement, WhatsApp Listing]</span>
      </div>
      <div className="copilot-section">
        <button className="copilot-btn">Generate Story & Price</button>
        <span className="copilot-status">[Vertex AI Storytelling, Fair Price Suggestion]</span>
      </div>
      <div className="copilot-section">
        <button className="copilot-btn">Schedule Delivery</button>
        <span className="copilot-status">[Shiprocket/Delhivery API]</span>
      </div>
      <div className="copilot-section">
        <button className="copilot-btn">Chat with Buyer AI</button>
        <span className="copilot-status">[Vertex AI Chat]</span>
      </div>
      <div className="copilot-section">
        <button className="copilot-btn">View Analytics & Insights</button>
        <span className="copilot-status">[Vertex AI Recommendations]</span>
      </div>
      <div className="copilot-section">
        <button className="copilot-btn">Automate Everything</button>
        <span className="copilot-status">[All features will run automatically]</span>
      </div>
      <div className="copilot-note">* All actions are placeholders for future AI automation.</div>
    </div>
  );
}
