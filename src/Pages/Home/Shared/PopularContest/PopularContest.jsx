import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import PopularCard from "./PopularCard";


const PopularContest = () => {

    const [contest, setContest] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/contests')
            .then(res => {
                setContest(res.data)
            })
    }, [axiosPublic])

    const popularCard = contest.slice(0, 5)
  

    return (
        <div>

            <h1 className="text-center text-3xl font-bold mt-10 text-orange-500">Popular <span className="text-blue-500">Contest</span></h1>
            <p className="border-2 border-b-orange-600 w-1/12 mx-auto"></p>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    popularCard.map(item=> <PopularCard key={item._id} item={item}></PopularCard>)
                }
            </div>

        </div>
    );
};

export default PopularContest;