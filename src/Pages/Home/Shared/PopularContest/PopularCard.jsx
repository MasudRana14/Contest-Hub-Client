

const PopularCard = ({item}) => {

    const {name, image, description} = item;

    return (
        <div>
            <div>
               

                <section className="mt-16">
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div
                            className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                            <img
                                src={image}
                                alt="card-image" />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                               {name}
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                {description}
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <button>
                                Details
                            </button>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default PopularCard;