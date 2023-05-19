import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [showAdditionalText, setShowAdditionalText] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAdditionalText(true);
        }, 8000);
    
        return () => {
          clearTimeout(timeout);
        };
      }, []);

  return (
    <div>
        <div className='loading-container'>
            <div className='loading-text-container'>
                <p className='loading-text'>Please wait while we find some pets for you</p>
                <p className='loading-subtext'>This may take a few moments</p>
                {showAdditionalText && 
                <p className='waiting-text'>
                    Thank you for hanging in there! shouldn't be much longer!
                </p>}
            </div>

            
        </div>            
        <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
        
    </div>
  );
};

export default LoadingScreen;