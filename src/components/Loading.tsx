import React from 'react';
import Logo2 from '../assets/Logo2.png';

const Loading: React.FC = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#001F3F',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div 
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <img 
          src={Logo2} 
          alt="Logo" 
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            marginBottom: '30px',
            animation: 'pulse 2s infinite ease-in-out',
          }}
        />
        
        
        {/* Loading text */}
        <p 
          style={{
            fontSize: '18px',
            color: 'white',
            letterSpacing: '2px',
            marginTop: '40px',
          }}
        >
          LOADING...
        </p>
        
        {/* Dots animation */}
        <div 
          style={{
            display: 'flex',
            marginTop: '10px',
          }}
        >
          {[1, 2, 3].map((_, index) => (
            <div 
              key={index}
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: 'white',
                borderRadius: '50%',
                margin: '0 5px',
                animation: `fadeInOut 1.5s infinite ${index * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Loading;