import { FindPrediction } from "@/app/lib/actions.ts/predictions";
import Gamecard from "@/app/lib/gamecard";
import { getGames } from "@/app/lib/routes/getgames";
import { getPredictions } from "@/app/lib/routes/getpredictions";
import { div } from "framer-motion/client";

export default async function GamesPage() {
  const games = await getGames();
  const predictions = (await getPredictions()) || [];

  return (
    <div className="p-2 h-min-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {games?.map((game) => (
          <div key={game.game_id.valueOf()} className=" pb-2 pt-2">
            <Gamecard
              game={game}
              prediction={FindPrediction(game.game_id, predictions)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
