import React from 'react';

function VideoBackground() {
    return (
        <div className="relative w-full h-screen max-h-[1080px] overflow-hidden">
            <video autoPlay muted loop className="absolute top-1/5 bottom-1/5 left-0 w-full h-auto max-h-full object-cover ">
                <source src="/SamarthEV.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> 
            <img src="FDGD-150x150.png" alt="" className="h-[150px] relative transition-transform ease-in-out hover:rotate-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    );
}

export default VideoBackground;
