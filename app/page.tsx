
import Link from "next/link";
import { components } from "./data/login-ui";

export default function Home() {
  return (
    <div className="min-h-screen  bg-gray-50 bg-neutral-100 dark:bg-neutral-950 p-8 flex justify-center items-center ">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center md:my-10 flex flex-col gap-2">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            <span className="text-orange-600 dark:text-orange-400">Login UI</span> Collection
          </h1>
          <p className="text-xs text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            A curated collection of modern, copy-paste login components.
          </p>
        </header>
        <p className="tracking-wider text-center text-neutral-700 dark:text-neutral-300 font-semibold">
          hey 👋🏻, i am <Link href="https://www.rahscripts.online/" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 underline">mr.</Link> <br />
          <Link target="_blank" rel="noopener noreferrer" href="https://github.com/rahscripts/login" className="text-orange-600 dark:text-orange-400 underline">
            one star ⭐️ for this little project 😤
          </Link>
        </p>
      </div>
    </div>
  );
}
