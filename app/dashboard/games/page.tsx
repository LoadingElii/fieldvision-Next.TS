import Gamecard from "@/app/lib/gamecard";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";

export default function GamesPage() {
  return (
    <div className="p-2 h-min-full">
      <div className="grid grid-cols-2 justify-items-center">
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
              <Gamecard />
      <Gamecard />

      </div>
    </div>
  );
}
