import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-32 gap-6">
      <span className="text-6xl">🦍</span>
      <h1 className="text-5xl md:text-7xl font-black text-[#39ff14]">Chill Gorilla Universe</h1>
      <p className="text-xl text-gray-300 max-w-2xl">Autonomous Commerce Platform — Live Now</p>
      <Link href="/products" className="mt-4 px-10 py-4 bg-[#39ff14] text-black font-black text-lg rounded-full">Shop Products →</Link>
    </main>
  );
}