import React from "react";

const VideoSection = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl font-bold mb-6 py-10">Testimonial</h2>
                <div className="relative w-full max-w-3xl mx-auto">
                    <video
                        className="w-90 rounded-lg shadow-lg h-90vh"
                        controls
                       
                    >
                        <source src="testimonial-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;