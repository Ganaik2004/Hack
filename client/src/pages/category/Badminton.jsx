import { Link } from "react-router-dom";
import mouseClick from "../../assets/rclick-13693.mp3"
export default function Badminton(){
  const playClickSound = () => {
    const audio = new Audio(mouseClick);
    audio.play();
};
    return(
    <div className="container mx-auto mt-8">
  <Link to={"/categories"} >
    <span className="text-md underline text-slate-500 -mt-4 ml-1 cursor-pointer hover:text-black" onClick={playClickSound}>Back</span>
  </Link>
  <h1 className="text-3xl font-bold mb-4">Badminton </h1>
  <ul id="cricketPlayers" className="list-disc pl-4">
    {/* Cricket players will be inserted here */}
    <h2 className="text-lg font-bold italic">The fastest racket game.</h2>
    <div className="float-right">
      <img className="h-64 w-96 mr-16" src="https://img.freepik.com/free-photo/little-boy-playing-badminton-isolated-white-wall_155003-33206.jpg?size=626&ext=jpg&ga=GA1.1.482277896.1710002448&semt=ais" alt=""></img>
      {/* <img className="h-64 w-96 -mt-16 mr-36  " src="https://media.gettyimages.com/id/844185658/photo/london-england-james-anderson-of-england-celebrates-after-taking-the-wicket-of-kraigg.jpg?s=612x612&w=0&k=20&c=T_ExFZ7zCD7GknW9z5aG8ebEHOC9Lxm4GfIyxIYpGg8=" alt=""></img> */}
    </div>
      <img className= "h-48 w-48" src= "https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt = "Rackets, shuttle cocks, and more"/>
      <ul>
    <li>Badminton is played with a shuttlecock</li>
    <li>Badminton is played on a court</li>
    <li>Badminton is played with a racket</li>
    <li>Badminton is played in singles or doubles</li>
    <li>Badminton is played in sets</li>
    <li>Badminton is won by the player or team that wins the most sets</li>
  </ul>
  </ul>
</div>
    );
}