import React, { useEffect } from "react";

export default function AnimatedSplash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'linear-gradient(135deg, #b47cff, #5ec9c7)', // Lavender-purple to teal
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      flexDirection: 'column',
      color: '#fff',
    }}>
      <div className="logo" style={{
        width: 100,
        height: 100,
        borderRadius: 20,
        background: 'linear-gradient(135deg, #b47cff, #5ec9c7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
        marginBottom: 20,
        animation: 'logoPop 1.2s',
      }}>
        RW
      </div>
      <h1 style={{margin:0,fontSize:28,fontWeight:700,letterSpacing:1,animation:'fadeInText 1.2s'}}>RealWorlds AI</h1>
      <p style={{margin:'6px 0 0',fontSize:16,opacity:0.9,animation:'fadeInText 1.6s'}}>AI Marketplace for Local Artisans</p>
      <style>{`
        @keyframes logoPop {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
