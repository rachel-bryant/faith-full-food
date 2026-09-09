import { useState } from "react";

function Video({ title, video, videoSrc }) {
    const [playing, setPlaying] = useState(false);
    
    function playVideo() {
        setPlaying(true);
    }

    return (
        <>
        <div className="video-block">
            <p>{ title || "Title"}</p>
            <div className="video">
                {!playing && (
                    <>
                    <img src={videoSrc} className="thumbnail"/>
                    <button className="play-btn" onClick={playVideo}>&#9658;</button>
                    </>
                )}

                {playing && (
                    <iframe src={`${video}?autoplay=1`} allow="autoplay"></iframe>
                )}
            </div>
        </div>
        </>
    )
}

export default Video;