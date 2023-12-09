

const ContestWinner = () => {



    return (
        <div className="mt-16">

            <h1 className="text-center text-3xl font-bold mt-10 text-blue-500">Contest<span className="text-orange-500"> Winner</span></h1>
            <p className="border-2 border-b-orange-600 w-1/12 mx-auto"></p>



            <section className="mt-10">

                <div
                    className="rounded-md p-6 h-[500px] text-center shadow-lg md:p-12 md:text-left"
                    style={{ backgroundImage: 'url(https://i.ibb.co/Jp8mxww/winer.jpg)' }}>
                    <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <div
                                className="m-4 -mt-12 md:mt-20 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">

                                <div className="md:flex md:flex-row">
                                    <div
                                        className="mx-auto mb-6 flex w-full items-center justify-center lg:mb-0">
                                        <img
                                            src="https://i.ibb.co/HGCS9NL/winner.jpg"
                                            className=" shadow-md rounded-full dark:shadow-black/30"
                                            alt="woman avatar" />
                                    </div>
                                    <div className="md:ml-6">

                                        <h2
                                            className="mb-2 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                                           Our Contest Winner
                                        </h2>
                                        <p
                                            className="mb-6 text-xl font-medium text-neutral-500 dark:text-neutral-300">
                                           Here are the winner of our contest. Here you can participate in your favorite contest and win, And you can win attractive prizes.
                                        </p>

                                        <button className="bg-orange-600 text-white p-1 rounded-md hover:bg-blue-500">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContestWinner;