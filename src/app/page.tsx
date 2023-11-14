import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="min-w-full h-60 bg-blue-50 rounded overflow-y-auto">
        <div>Hello!</div>
        <div>Hello you too!</div>
      </div>
      <input className="w-1/3 h-24 bg-blue-100 rounded" />
      <button className="bg-green-300 p-5 rounded hover:bg-green-500 text-white font-bold">
        Send
      </button>
    </main>
  );
}
