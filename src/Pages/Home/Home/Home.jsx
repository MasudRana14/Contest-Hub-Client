import Banner from "../Banner/Banner";
import ContestWinner from "../Shared/ContestWinner/ContestWinner";
import PopularContest from "../Shared/PopularContest/PopularContest";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularContest></PopularContest>
           <ContestWinner></ContestWinner>
        </div>
    );
};

export default Home;