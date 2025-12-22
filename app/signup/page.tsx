"use client";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const router = useRouter();
    return (
<main className="flex justify-center h-screen overflow-hidden">
      <div className="grid grid-cols-1 justify-center rounded-xl  w-3/4  md:w-2/4 ">
        <div className="place-self-center">
          <h2 className="text-xl text-black">Create an account</h2>
        </div>
        <form className="" >
          <div className="">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-black"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="text-black rounded-md w-full"
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-black"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="text-black rounded-md w-full"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
          <div className="">
            <label
              className="mb-3 mt-2 block text-xs font-medium text-black"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className=" text-black rounded-md w-full"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
          <button
            className=" mt-3 p-1 w-full text-white rounded-xl bg-blue-600 hover:text-black hover:bg-blue-300 "
            type="submit"
          >
            Create account
          </button>
          <button
            className=" mt-2 p-1 w-full text-white rounded-xl bg-black hover:bg-gray-300 hover:text-black "
            type="button"
            onClick={() => router.push("/login")}
          >
            Back to login?
          </button>          
        </form>
      </div>
    </main>
    );
};