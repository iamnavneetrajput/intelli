import React from 'react';

const NotFoundPage = () => {
  return (
    <>
    <div className="error404">
      <div className="text404">
        <svg width="300" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="40" fontFamily="Verdana" fontSize="35" className="text">404</text>
          <text x="10" y="80" fontFamily="Verdana" fontSize="20" className="text">Page Not Found</text>
        </svg>
      </div>
      <div className="robot">
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <rect x="50" y="60" width="100" height="80" className="robot-body" />
          {/* Head */}
          <rect x="70" y="20" width="60" height="60" className="robot-head" />
          {/* Eyes */}
          <circle cx="85" cy="40" r="5" className="robot-eye" />
          <circle cx="115" cy="40" r="5" className="robot-eye" />
          {/* Mouth */}
          <line x1="85" y1="55" x2="115" y2="55" className="robot-mouth" />
          {/* Antennas */}
          <line x1="85" y1="20" x2="85" y2="5" className="robot-antenna" />
          <line x1="115" y1="20" x2="115" y2="5" className="robot-antenna" />
          <circle cx="85" cy="5" r="3" className="robot-antenna-tip" />
          <circle cx="115" cy="5" r="3" className="robot-antenna-tip" />
          {/* Arms */}
          <line x1="50" y1="80" x2="30" y2="80" className="robot-arm" />
          <line x1="150" y1="80" x2="170" y2="80" className="robot-arm" />
          {/* Legs */}
          <line x1="70" y1="140" x2="70" y2="160" className="robot-leg" />
          <line x1="130" y1="140" x2="130" y2="160" className="robot-leg" />
        </svg>
      </div>
    </div>    
    </>
  );
};

export default NotFoundPage;
