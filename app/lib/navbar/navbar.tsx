import Navlinks from "./navlinks";

export const Navbar = () => {

  return (
    <>
      <div className="grid grid-cols-2 w-full h-1/2 bg-black rounded-b-lg">
        <h1 className="text-xl text-white pl-4 self-center">FieldVision</h1>
        <div className="text-lg">
          <Navlinks />
        </div>
      </div>
    </>
  );
};
