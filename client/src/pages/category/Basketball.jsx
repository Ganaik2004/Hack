import { Link } from "react-router-dom";
import mouseClick from "../../assets/rclick-13693.mp3"
export default function Basketball(){
  const playClickSound = () => {
    const audio = new Audio(mouseClick);
    audio.play();
};
    return(
    <div className="container mx-auto mt-8">
  <Link to={"/categories"} >
    <span className="text-md underline text-slate-500 -mt-4 ml-1 cursor-pointer hover:text-black" onClick={playClickSound}>Back</span>
  </Link>
  <h1 className="text-3xl font-bold mb-4">Basketball </h1>
  <ul id="cricketPlayers" className="list-disc pl-4">
    {/* Cricket players will be inserted here */}
    <h2 className="text-lg font-bold italic">The Supernatural's Game.</h2>
    <div className="float-right">
      <img className="h-64 w-96 -mt-16" src="https://media.gettyimages.com/id/1463993781/nl/foto/los-angeles-california-lebron-james-of-the-los-angeles-lakers-reacts-after-scoring-to-pass.jpg?s=612x612&w=0&k=20&c=Gm06dpy4KMnOvVDEEf0mdTLjodH63bR5ZXUZ_7HvVgo=" alt="Lebron James"></img>
      <img className="h-64 w-96 -mt-16 mr-36  " src="https://media.gettyimages.com/id/509506/nl/foto/michael-jordan-of-the-chicago-bulls-rests-on-the-court-during-a-game-note-to-user-user-expressly.jpg?s=612x612&w=0&k=20&c=vVu8QekKSAHxXy0xv7YFaT6_6LY2FRXKLv1KhY7U-AA=" alt=""></img>
    </div>
      <img className= "h-48 w-48" src= "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt = "A hoop and a Basketball"/>
      <ul>
      <li>Basketball is played with a ball</li>
    <li>Basketball is played on a court with specific dimensions</li>
    <li>Basketball is played with two teams, each with five players</li>
    <li>Basketball players score points by shooting the ball through the opponent's hoop</li>
    <li>Basketball games are divided into quarters or halves, depending on the level of play</li>
    <li>Basketball is won by the team that scores the most points by the end of the game</li>
      </ul>
  </ul>
</div>
    );
}