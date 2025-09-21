import React from "react";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.4)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} onClick={onClose}>
      <div style={{
        background: '#fff',
        borderRadius: 18,
        padding: 32,
        minWidth: 340,
        maxWidth: 420,
        boxShadow: '0 8px 32px rgba(51,51,51,0.18)',
        position: 'relative',
        fontFamily: 'Lato, Open Sans, Arial',
      }} onClick={e => e.stopPropagation()}>
        <button style={{position:'absolute',top:16,right:16,fontSize:22,background:'none',border:'none',cursor:'pointer'}} onClick={onClose}>&times;</button>
        <div style={{fontSize:48,marginBottom:12}}>{product.thumb}</div>
        <h2 style={{fontFamily:'Playfair Display, serif',color:'#D36B00'}}>{product.title}</h2>
        <div style={{margin:'12px 0',color:'#333',fontSize:16}}>
          <strong>Price:</strong> ${product.price}
          <button className="small-btn" style={{marginLeft:10}} title="AI Suggest Fair Price">Suggest Price (AI)</button>
        </div>
        <div style={{margin:'12px 0',color:'#6B8E23',fontSize:15}}>
          <strong>Artisan Story:</strong> <span style={{color:'#333'}}>[Vertex AI Storytelling Placeholder]</span>
          <button className="small-btn" style={{marginLeft:10}} title="Generate Story">Generate Story (AI)</button>
        </div>
        <div style={{margin:'12px 0',color:'#F4C95D',fontSize:15}}>
          <strong>Image Enhancement:</strong> <span style={{color:'#333'}}>[Vertex AI Image Enhancement Placeholder]</span>
          <button className="small-btn" style={{marginLeft:10}} title="Enhance Image">Enhance Image (AI)</button>
        </div>
        <div style={{margin:'12px 0',color:'#00796B',fontSize:15}}>
          <strong>Voice Upload:</strong> <span style={{color:'#333'}}>[Speech-to-Text Placeholder]</span>
          <button className="small-btn" style={{marginLeft:10}} title="Upload Voice">Upload Voice</button>
        </div>
        <div style={{margin:'12px 0',color:'#25D366',fontSize:15}}>
          <strong>WhatsApp Listing:</strong> <span style={{color:'#333'}}>[WhatsApp API Placeholder]</span>
          <button className="small-btn" style={{marginLeft:10}} title="List via WhatsApp">List via WhatsApp</button>
        </div>
        <div style={{margin:'12px 0',color:'#1976D2',fontSize:15}}>
          <strong>Delivery:</strong> <span style={{color:'#333'}}>[Shiprocket/Delhivery API Placeholder]</span>
          <button className="small-btn" style={{marginLeft:10}} title="Schedule Delivery">Schedule Delivery</button>
        </div>
        <div style={{margin:'12px 0',color:'#8E24AA',fontSize:15}}>
          <strong>Buyer AI Chat:</strong> <span style={{color:'#333'}}>[Vertex AI Chat Placeholder]</span>
          <button className="small-btn" style={{marginLeft:10}} title="Chat with AI">Chat with AI</button>
        </div>
        <div style={{margin:'12px 0',color:'#F06292',fontSize:15}}>
          <strong>Analytics & Insights:</strong> <span style={{color:'#333'}}>[Vertex AI Recommendations Placeholder]</span>
          <button className="small-btn" style={{marginLeft:10}} title="View Insights">View Insights</button>
        </div>
        <div style={{display:'flex',gap:12,marginTop:24}}>
          <button className="small-btn">Buy Now</button>
          <button className="small-btn">Add to Cart</button>
          <button className="small-btn" style={{background:'#D36B00'}}>Schedule Pickup</button>
        </div>
      </div>
    </div>
  );
}
