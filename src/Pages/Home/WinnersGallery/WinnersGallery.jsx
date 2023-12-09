
const WinnersGallery = () => {

    return (
        <div className="mb-14">
            <div>
                <h1 className="text-center text-3xl font-bold mt-12 text-blue-500">Winners<span className="text-orange-500"> Gallery</span></h1>
                <p className="border-2 border-b-orange-600 w-1/12 mx-auto"></p>
            </div>


            <section>

                <div className="container mx-auto px-5 py-2 lg:px-32 mt-10">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/5RjTWr5/winer-gallary3.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/MPsbN41/winer-gallary5.jpg" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/hMVqZCZ/winer-gallary-2.webp" />
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/1JPdQNj/winer-gallary6.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/6thFMTC/arts-winner.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/C2vF8cH/medical-winner.jpg" />
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        </div>
    );
};

export default WinnersGallery;