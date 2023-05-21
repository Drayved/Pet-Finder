import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [showAdditionalText, setShowAdditionalText] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAdditionalText(true);
        }, 8000);
    
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    
        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, []);

    let additionalText;
    if (timer > 20) {
        additionalText = "It's taking longer than expected. Thank you for your patience.";
    } else {
        additionalText = "Thank you for hanging in there! Shouldn't be much longer!";
    }

    return (
        <div>
            <div className='loading-container'>
                <div className='loading-text-container'>
                    <p className='loading-text'>Please wait while we find some pets for you</p>
                    <p className='loading-subtext'>This may take a few moments</p>
                    {showAdditionalText && <p className='waiting-text'>{additionalText}</p>}
                </div>
            </div>
                        
            <div className={showAdditionalText ? "loading-dots" : "dots-loading"}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
