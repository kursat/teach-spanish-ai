"use client";

import Chat from "@/components/chat/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex-1 bg-blue-100">Content</div>
      <div className="w-90">
        <Chat />
      </div>
    </main>
  );
}
