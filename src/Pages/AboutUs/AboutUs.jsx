

const AboutUs = () => {



    return (
        <div className="mt-4">

            <div>
                <section className="bg-center bg-no-repeat bg-cover  bg-[url('https://i.ibb.co/XxxV538/about-cover.webp')] bg-gray-400 h-[400px] bg-blend-multiply rounded-lg">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24">

                        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-4xl opacity-90 ">About Our <br /> Contest Hub Website</h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to Contest Hub website. All types of contest are organized here. Here you can participate in your favorite Contest.</p>

                    </div>
                </section>
            </div>




            <h1 className="text-center font-bold text-3xl text-orange-600 mt-7">About <span className="text-blue-600">Us</span></h1>
            <p className="border-2 border-b-yellow-700 w-1/12 mx-auto"></p>


            <div className="mt-6 mb-8">
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/cKBYqP7/about-2.png" className="w-1/2 rounded-lg shadow-xl gap-5" />
                        <div>
                            <h1 className="text-4xl font-bold">Participate by knowing about our Contest Website!</h1>
                            <p className="py-6">We conduct our Contest with utmost security. We have many years of experience in this competition. Here you can participate in the contest of your choice through payment, and win big prize.</p>
                            <button className="btn btn-sm text-white font-bold bg-orange-600 hover:bg-blue-600">Our History</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;