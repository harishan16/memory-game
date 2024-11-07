import "./GamePage.scss";
import Game from "../../components/Game/Game";
// import background from "../../images/background.jpeg";

const GamePage = () => {
  return (
    <div className="game-page">
      <div className="game-page__heading">
        <div>
          <h1>Disney Land</h1>
        </div>
        <div>
          {/* <h3>
            Play a game to earn blue bells that you can donate to the initiative
            of your choice
          </h3> */}
        </div>
        <div>
          <Game />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
