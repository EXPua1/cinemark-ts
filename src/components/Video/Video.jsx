import React from 'react'

const Video = ({ videoKey }) => {
    return (
        <div>
            <h2>Video</h2>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoKey}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Video