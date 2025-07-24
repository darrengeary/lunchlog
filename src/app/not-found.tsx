import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 text-gray-900 p-6">
      <Image src="/lunch-log.png" alt="LunchLog logo" width={180} height={30} className="mb-8" />
      <h1 className="text-4xl font-bold mb-4 text-orange-500">404 - Page Not Found</h1>
      <p className="text-lg mb-6 text-gray-700 text-center max-w-xl">
        Oops! The page you’re looking for doesn’t exist. But there’s plenty more to explore:
      </p>
      <div className="flex gap-4 mb-8">
        <Link href="/">
          <button className="px-6 py-2 rounded-full font-semibold shadow bg-gradient-to-tr from-[#f58c36] to-[#fb9e4c] text-white hover:scale-105 transition">Home</button>
        </Link>
        <Link href="#how">
          <button className="px-6 py-2 rounded-full font-semibold shadow bg-gradient-to-tr from-blue-400 to-blue-600 text-white hover:scale-105 transition">How It Works</button>
        </Link>
        <Link href="#contact">
          <button className="px-6 py-2 rounded-full font-semibold shadow bg-gradient-to-tr from-orange-400 to-orange-600 text-white hover:scale-105 transition">Contact</button>
        </Link>
      </div>
      <p className="text-sm text-gray-500">If you think this is a mistake, <a href="mailto:info@lunchlog.ie" className="text-orange-500 underline">let us know</a>.</p>
    </div>
  );
}
