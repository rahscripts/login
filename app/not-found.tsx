import Link from "next/link";

export default function NotFound() {
    return (<div className="flex relative flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">oops! this page doesn't exist</h1>
        <div className="flex gap-4">
            <Link href="/" className="bg-orange-600 font-bold hover:bg-orange-700 transition-colors duration-300 text-white px-4 py-2 rounded mt-4">Back to Home</Link>
            <Link href="/login/1" className="bg-neutral-600 font-bold hover:bg-neutral-700 transition-colors duration-300 text-white px-4 py-2 rounded mt-4">login simple ui</Link>
        </div>
    </div>);
}