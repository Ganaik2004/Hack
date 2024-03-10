import { Link } from "react-router-dom";
import mouseClick from "../../assets/rclick-13693.mp3"
export default function Tennis(){
  const playClickSound = () => {
    const audio = new Audio(mouseClick);
    audio.play();
};
    return(
    <div className="container mx-auto mt-8">
  <Link to={"/categories"} >
    <span className="text-md underline text-slate-500 -mt-4 ml-1 cursor-pointer hover:text-black" onClick={playClickSound}>Back</span>
  </Link>
  <h1 className="text-3xl font-bold mb-4">Tennis </h1>
  <ul id="cricketPlayers" className="list-disc pl-4">
    {/* Cricket players will be inserted here */}
    <h2 className="text-lg font-bold italic">The Game with a ball and a racket.</h2>
    <div className="float-right">
      <img className="h-64 w-96 -mt-16" src="https://media.gettyimages.com/id/992963996/nl/foto/london-england-roger-federer-of-switzerland-celebrates-after-defeating-jan-lennard-struff-of.jpg?s=612x612&w=0&k=20&c=NEnYn0YV3FZIDRfQLUIZfBclq26ftiWzNrC8niQwTxs=" alt=""></img>
      <img className="h-64 w-96 -mt-16 mr-36  " src="https://media.gettyimages.com/id/544090226/nl/foto/london-england-serena-williams-of-the-united-states-celebrates-victory-during-the-ladies.jpg?s=612x612&w=0&k=20&c=EyZMDrRo0Ib80Um7AYMfA8kRkTSyV1sUZdXzNd1cTC8=" alt=""></img>
    </div>
      <img className= "h-48 w-48" src= "https://images.pexels.com/photos/5739161/pexels-photo-5739161.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "Cricket"/>
      <ul>
      <li>Tennis is played with a racket and a ball</li>
    <li>Tennis is played on a court with specific dimensions</li>
    <li>Tennis can be played individually (singles) or with two players on each side (doubles)</li>
    <li>Players hit the ball back and forth over a net, aiming to land it within the boundaries of the opponent's side of the court</li>
    <li>Tennis matches are divided into sets, which are further divided into games</li>
    <li>A player wins a tennis match by winning the majority of sets, usually two out of three for women's matches and three out of five for men's matches</li>
      </ul>
  </ul>
</div>
    );
}