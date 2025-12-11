import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 ">
      <main >
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-2.5 pb-2.5">
          Welcome to Go  Travel Pay!
        </h1>
        <Image
          className="dark:invert"
          src="/gtp.png"
          alt="Next.js logo"
          width={1000}
          height={200}
          priority
        />
      </main>
    </div>
  );
}
