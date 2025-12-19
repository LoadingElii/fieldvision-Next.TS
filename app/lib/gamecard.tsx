import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import Link from "next/link";

export default function Gamecard() {
  return (
    <div>
      <Card className="max-w-2xs bg-slate-300 border rounded-xl pt-2">
        <CardHeader className="grid grid-cols-2 justify-items-center">
          <div className="flex flex-col">
            <p className="text-md">
              Game ID: <span className="font-semibold">1a</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-md">
              Week #: <span className="font-semibold">8</span>
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="grid grid-cols-1 bg-slate-100 p-2">
          <div className="flex flex-col items-center">
            <p className="text-sm"> Home Name</p>
            <p className="text-md font-semibold">Home Score</p>
          </div>
          <div className="self-center justify-self-center">
            <p>-</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">Away Name</p>
            <p className="text-md font-semibold">Away Score</p>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-around pb-2">
          <p>Game Date</p>
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
