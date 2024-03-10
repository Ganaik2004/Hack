import { Link } from "react-router-dom";
import mouseClick from "../../assets/rclick-13693.mp3"
export default function Football(){
  const playClickSound = () => {
    const audio = new Audio(mouseClick);
    audio.play();
};
    return(
    <div className="container mx-auto mt-8">
  <Link to={"/categories"} >
    <span className="text-md underline text-slate-500 -mt-4 ml-1 cursor-pointer hover:text-black" onClick={playClickSound}>Back</span>
  </Link>
  <h1 className="text-3xl font-bold mb-4">Football </h1>
  <ul id="cricketPlayers" className="list-disc pl-4">
    {/* Cricket players will be inserted here */}
    <h2 className="text-lg font-bold italic">The Stamina & Skill Game.</h2>
    <div className="float-right">
      <img className="h-64 w-96 -mt-16" src="https://media.gettyimages.com/id/1449019297/nl/foto/lusail-city-qatar-lionel-messi-of-argentina-celebrates-the-teams-3-0-victory-in-the-fifa-world.jpg?s=612x612&w=0&k=20&c=sFZvBqAOWSQeZcP6VF-2h_AslqGbUh9LFLa7YOirrNo=" alt="Messi"></img>
      <img className="h-64 w-96 -mt-16 mr-36  " src="https://media.gettyimages.com/id/1358485714/nl/foto/norwich-england-cristiano-ronaldo-of-manchester-united-celebrates-after-scoring-his-sides.jpg?s=612x612&w=0&k=20&c=PPomyDGtQI4ivhNFtrTVQuW_DZNudF3oL1rih0W4a_8=" alt="Ronaldo"></img>
    </div>
      <img className= "h-48 w-48" src= "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "Football"/>
      <ul>
      <li>Football is played with a spherical ball</li>
    <li>Football is played on a rectangular field with specific dimensions</li>
    <li>Football is played with two teams, each with eleven players</li>
    <li>Football players score goals by kicking the ball into the opponent's net</li>
    <li>Football matches are typically divided into two halves, with added time for stoppages</li>
    <li>Football matches can be won, lost, or drawn, depending on the number of goals scored by each team</li>
      </ul>
  </ul>
</div>
    );
}