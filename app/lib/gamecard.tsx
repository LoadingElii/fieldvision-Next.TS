import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import { Game } from "./models/gamemodel";

export default function Gamecard({game} : {game: Game}) {
  return (
    <div>
      <Card className="max-w-2xs bg-slate-300 border rounded-xl pt-2">
        <CardHeader className="grid grid-cols-2 justify-items-center">
          <div className="flex flex-col">
            <p className="text-md">
              Game ID: <span className="font-semibold">{game.game_id}</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-md">
              Week #: <span className="font-semibold">{game.week.toString()}</span>
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="grid grid-cols-1 bg-slate-100 p-2">
          <div className="flex flex-col items-center">
            <p className="text-sm">{game.home_team}</p>
            <p className="text-md font-semibold">{game.home_score.toString()}</p>
          </div>
          <div className="self-center justify-self-center">
            <p>-</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">{game.away_team}</p>
            <p className="text-md font-semibold">{game.away_score.toString()}</p>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-around pb-2">
          <p>{String(game.gameday)}</p>
          <Link
            href="https://github.com/heroui-inc/heroui"
            className="hover:text-blue-300"
          >
            Go to Game.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
