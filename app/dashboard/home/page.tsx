import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-cols-2">
      <h1 className="text-6xl pb-2 pl-2 md:pl-4 pt-2 md:pt-4 col-span-full">
        HOME
      </h1>
      <div className="justify-items-center col-span-full">
        <h2 className="pb-2 md:pb-4 text-3xl">Welcome to FieldVision</h2>
        <p className="pl-2 pr-2 md:pl-4 md:pr-4 w-1/2">
          FieldVision helps you quickly see who has the edge in every NFL game
          each week. Instead of digging through stats, rankings, and opinions,
          FieldVision pulls everything together and shows clear win percentages
          for both teams in each matchup. Open the app, check the week’s games,
          and instantly understand how each game is likely to play out. As the
          season goes on, FieldVision will also let you explore team performance
          trend, and see how teams have been performing over time — all in a
          clean, easy-to-read layout. No noise. No hot takes. Just football
          data, made simple.
        </p>
      </div>
      <Link
        className="bg-black text-white w-1/2 mt-2 md:mt-4 mr-2 
        md:mr-4 justify-self-end rounded-md hover:bg-gray-300
        text-center"
        href={"/dashboard/games"}
      >
        Games
      </Link>
      <Link
        className="bg-white w-1/2 mt-2 md:mt-4 ml-2
         md:ml-4 justify-self-start rounded-md hover:bg-gray-300 hover:text-white
         text-center"
        href={"/home"}
      >
        Teams
      </Link>
    </div>
  );
}
