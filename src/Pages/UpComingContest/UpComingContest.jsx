import Marquee from "react-fast-marquee";


const UpComingContest = () => {

    return (
        <div>

            <h1 className="text-center font-bold text-3xl text-orange-600 mt-12">Up Coming<span className="text-blue-600"> Contest</span></h1>
            <p className="border-2 border-b-orange-600 w-1/12 mx-auto"></p>

            <div>
                <Marquee speed={25}>
                    <div className="flex gap-6 mt-10">

                        {/* Card 1  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/njxn1Zy/photo-contets.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                   Photo Contest
                                </p>
                                <p className="text-white">Coming: 2024</p>
                            </div>
                        </div>

                        {/* Card 2  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/KN1dNZ8/codingcompetitionblog-23489.webp')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                   Coding Contest
                                </p>
                                <p className="text-white">Coming : 1-Jan-2024</p>
                            </div>
                        </div>

                        {/* Card 3  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/khTR6Sw/Creative-Canvas.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                Creative Canvas Contest
                                </p>
                                <p className="text-white">Coming: 13-Feb-2024</p>
                            </div>
                        </div>

                        {/* Card 4  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/2h9zkT2/Fitness-Frenzy.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                Fitness Frenzy
                                </p>
                              
                                <p className="text-white">Coming: 13-Mar-2024</p>
                            </div>
                        </div>

                        {/* Card 5  */}

                        <div className="relative grid w-80 h-80 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mr-5">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/SmqqgDP/innovation-challenge.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <p className="block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                Innovation Challenge
                                </p>
                                
                                <p className="text-white">Coming: 14-Feb-2024</p>
                            </div>
                        </div>

                    </div>
                </Marquee>
            </div>


        </div>
    );
};

export default UpComingContest;