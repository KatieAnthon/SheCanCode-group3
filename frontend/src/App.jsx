import "./App.css";
import KidkodeHeader from "./Header/Header";
import Leaderboard from "./Leaderboard/Leaderboard";
import Login from "./Login/Login";

function App() {
  return (
    <>
      <div className="header-container">
        <KidkodeHeader />
      </div>
      <div className="container">
        <div className="column">
          <Leaderboard />
        </div>
        <div className="login">
          <div className="column">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
