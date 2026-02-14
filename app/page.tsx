
import Link from "next/link";
import { components } from "./data/login-ui";

export default function Home() {
  return (
    <div className="min-h-screen  bg-gray-50 bg-neutral-100 dark:bg-neutral-950 p-8 flex justify-center items-center ">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center md:my-10 -space-y-2 ">
          <h1 className="text-xl font-medium tracking-wider mb-4  text-gray-900 dark:text-white bg-orange-500 w-fit p-1 px-3 mx-auto">Login UI Collection</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A curated collection of modern, copy-paste login components.
          </p>
        </header>
      </div>
    </div>
  );
}
