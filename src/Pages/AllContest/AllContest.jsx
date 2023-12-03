import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ContestCard from "./ContestCard";


const AllContest = () => {


    const [contest, setContest] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/contests')
            .then(res => {
                setContest(res.data)
            })
    }, [axiosPublic])

    return (
        <div>
            <h1 className="text-3xl text-center">All Contest: {contest.length}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
                {
                    contest.map(item => <ContestCard key={item._id} item={item}></ContestCard>)
                }

            </div>
        </div>
    );
};

export default AllContest;