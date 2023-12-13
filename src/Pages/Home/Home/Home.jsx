import Qna from "../../Qna/Qna";
import UpComingContest from "../../UpComingContest/UpComingContest";
import Banner from "../Banner/Banner";
import ContestWinner from "../Shared/ContestWinner/ContestWinner";
import PopularContest from "../Shared/PopularContest/PopularContest";
import WinnersGallery from "../WinnersGallery/WinnersGallery";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularContest></PopularContest>
           <UpComingContest></UpComingContest>
           <ContestWinner></ContestWinner>    
           <WinnersGallery></WinnersGallery>
           <Qna></Qna>
        </div>
    );
};

export default Home;