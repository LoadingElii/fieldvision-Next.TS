import { Suspense } from "react";
import Loading from "./loading";
import { Navbar } from "../lib/navbar/navbar";


export default function Layout( {children}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Suspense fallback={<Loading/>}></Suspense>
      <div className="w-full justify-self-center">
           {children}
      </div>
    </div>
  );
}