
const Banner = () => {
    return (
        <div className="mt-1">
            <div className="hero  h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/Qv8DXPS/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Contest Hub</h1>
                        <p className="mb-5 text-xl">Welcome to  Contest Hub, Where Creativity Thrives!

                            At Contest Hub, we believe that inspiration knows no bounds. Whether you are an artist, a writer, a designer, or someone with a unique skill waiting to be showcased, this is your ultimate platform. We are dedicated to fostering creativity, encouraging innovation, and celebrating talent across diverse spectrums.</p>
                        <button className="btn border-none bg-orange-600 hover:bg-blue-500 btn-sm btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;