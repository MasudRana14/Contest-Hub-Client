import { Link } from "react-router-dom";


const ContestCard = ({ item }) => {

    const { name, image, description } = item;

    return (
        <div>
            <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl ">
                    <img className="w-full " src={image} alt="profile-picture" />
                </div>
                <div className="p-6 ">
                    <h4 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <span className="text-xl">Contest Name:</span> {name}
                    </h4>
                    <p
                        className="block font-sans antialiased font-medium leading-relaxed ">
                        {description}
                    </p>

                    <div className="">
                        <Link>Details</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContestCard;