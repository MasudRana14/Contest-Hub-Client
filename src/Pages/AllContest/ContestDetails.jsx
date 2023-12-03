import { useLoaderData } from "react-router-dom";

const ContestDetails = () => {

    const details = useLoaderData()

    return (
        <div className="mt-10">



            <section className="max-w-screen-lg mx-auto ">
                <div
                    className="block bg-pink-100 rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg w-full h-[400px]"
                            src={details.image}
                            alt="" />
                    </div>
                    <div className="p-6">
                        <h5
                            className="text-center mb-4 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                            <span className="text-xl font-medium">Contest Name :</span> {details.name}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {details.description}
                        </p>
                        <div className="mb-3">
                            <p className="text-lg text-neutral-600 dark:text-neutral-200">
                                <small className="text-neutral-500 dark:text-neutral-400">
                                    <span className="font-bold">Deadline :</span> {details.deadline}</small>
                            </p>

                            <p className="text-lg text-neutral-600 dark:text-neutral-200">
                                <small className="text-neutral-500 dark:text-neutral-400">
                                    <span className="font-bold">Contest Prize :</span> {details.prizeMoney}</small>
                            </p>
                        </div>

                        <p className="text-lg text-neutral-600 dark:text-neutral-200">
                            <small className="text-neutral-500 dark:text-neutral-400">
                                <span className="font-bold"> Task Submission :</span> {details.instruction}</small>
                        </p>

                        <div className="mt-5">
                            <button className="btn text-white bg-orange-600 hover:bg-blue-600">Registration Now</button>
                        </div>
                    </div>

                </div>

            </section>


        </div>
    );
};

export default ContestDetails;