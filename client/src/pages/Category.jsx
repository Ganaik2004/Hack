import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="container mx-auto   ">
      <h1 className="text-3xl font-bold mb-4">Sports Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
        {/* Cricket */}
        <div className="bg-white p-4 shadow rounded-lg cursor-pointer hover:bg-red-600 hover:shadow-lg hover:text-white">
          <Link to="/category/cricket">
            <h2 className="text-xl font-bold mb-2">Cricket</h2>
            <p>
Cricket is a symphony of strategy and skill, played out on the canvas
 of a green field, where every stroke and move narrates the story of determination and teamwork.</p>
          </Link>
        </div>
        {/* Badminton */}
        <div className="bg-white p-4 shadow rounded-lg cursor-pointer hover:bg-yellow-600 hover:shadow-lg hover:text-white">
          <Link to="/category/badminton">
            <h2 className="text-xl font-bold mb-2">Badminton</h2>
            <p>
Badminton is a graceful ballet of agility and precision, where players wield rackets like brushes, painting the court with swift strokes of strategy and finesse, orchestrating a dance of shuttlecocks and skill.</p>
          </Link>
        </div>
        {/* Football */}
        <div className="bg-white p-4 shadow rounded-lg cursor-pointer hover:bg-blue-600 hover:shadow-lg hover:text-white">
          <Link to="/category/football">
            <h2 className="text-xl font-bold mb-2">Football</h2>
            <p>
Football is a passionate symphony of teamwork and athleticism, where players orchestrate the ball like notes in a grand score, composing tales of triumph and perseverance on the canvas of the pitch.</p>
          </Link>
        </div>
        {/* Basketball */}
        <div className="bg-white p-4 shadow rounded-lg cursor-pointer hover:bg-red-800 hover:shadow-lg hover:text-white">
          <Link to="/category/basketball">
            <h2 className="text-xl font-bold mb-2">Basketball</h2>
            <p>Basketball is a dynamic fusion of agility and coordination, where players move like dancers on the hardwood stage, orchestrating a symphony of passes, shots, and rebounds to create moments of pure athleticism and teamwork.</p>
          </Link>
        </div>
        {/* Tennis */}
        <div className="bg-white p-4 shadow rounded-lg cursor-pointer hover:bg-green-600 hover:shadow-lg hover:text-white">
          <Link to="/category/tennis">
            <h2 className="text-xl font-bold mb-2 ">Tennis</h2>
            <p>Tennis is a captivating duel of skill and strategy, where players wield rackets like swords, engaging in a graceful battle of finesse and power on the court, each point a narrative of determination and precision.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;