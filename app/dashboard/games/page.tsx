import Gamecard from "@/app/lib/gamecard";
import { getGames } from "@/app/lib/routes/getgames";


export default async function GamesPage() {
  const games = await getGames();

  return (
    <div className="p-2 h-min-full">
      <div className="grid grid-cols-2 justify-items-center">
        {games?.map((game) => (
          <Gamecard key={game.game_id.valueOf()} game={game}/>
        ))}
      </div>
    </div>
  );
}
