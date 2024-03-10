import {Link} from "react-router-dom";
import mouseClick from "../../assets/rclick-13693.mp3"
export default function Cricket(){
  const playClickSound = () => {
    const audio = new Audio(mouseClick);
    audio.play();
};
    return(
    <div className="container mx-auto mt-8">
    <Link to={"/categories"} >
    <span className="text-md underline text-slate-500 -mt-4 ml-1 cursor-pointer hover:text-black" onClick={playClickSound}>Back</span>
  </Link>
  <h1 className="text-3xl font-bold mb-4">Cricket </h1>

  <ul id="cricketPlayers" className="list-disc pl-4">
    {/* Cricket players will be inserted here */}
    <h2 className="text-lg font-bold italic">The Gentleman's Game.</h2>
    <div className="float-right">
      <img className="h-64 w-96 -mt-16" src="https://media.gettyimages.com/id/1435854325/photo/melbourne-australia-virat-kohli-of-india-celebrates-winning-the-icc-mens-t20-world-cup-match.jpg?s=612x612&w=0&k=20&c=4OXRTAZJkEa6MPkiXGjBPP_dGh-93mmxVMe_bFmZMqg=" alt=""></img>
      <img className="h-64 w-96 -mt-16 mr-36  " src="https://media.gettyimages.com/id/844185658/photo/london-england-james-anderson-of-england-celebrates-after-taking-the-wicket-of-kraigg.jpg?s=612x612&w=0&k=20&c=T_ExFZ7zCD7GknW9z5aG8ebEHOC9Lxm4GfIyxIYpGg8=" alt=""></img>
    </div>
      <img className= "h-48 w-48" src= "https://images.pexels.com/photos/9420724/pexels-photo-9420724.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "Cricket"/>
      <ul>
        <li>The game is played in overs</li>
        <li>The game is won by the team that scores the most runs</li>
        <li>The game can be won by a margin</li>
        <li>The game can also be won by a wicket</li>
        <li>The game can end in a tie</li>
        <li>The game can also end in a no result</li>
      </ul>
  </ul>
</div>
    );
}