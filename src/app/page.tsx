import ChatSession from "@/components/ChatSession";

export default function Home() {
  return (
    <main className="bg-[var(--clr-slate-100)] py-[2rem] w-full grow">
      <div className="w-[min(100%-2rem,800px)] mx-auto">
        <ChatSession />
      </div>
    </main>
  );
}
