import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 whitespace-nowrap">
            <Link href={'/dynamic-routes'}>
              <span className="ml-2 underline">Dynamic Routes</span>
            </Link>
          </li>
          <li className="mb-2 whitespace-nowrap">
            <Link href={'/parallel-routes'}>
              <span className="ml-2 underline">Parallel Routes</span>
            </Link>
          </li>
          <li className="mb-2 whitespace-nowrap">
            <Link href={`/intercepting-routes`}>
              <span className="ml-2 underline">Intercepting Routes</span>
            </Link>
          </li>
          <li className="mb-2 whitespace-nowrap">
            <Link href={'/route-handlers'}>
              <span className="ml-2 underline">Route Handlers</span>
            </Link>
          </li>
          <li className="mb-2 whitespace-nowrap">
            <Link href={'/middleware-test'}>
              <span className="ml-2 underline">Middleware</span>
            </Link>
          </li>
          <li className="mb-2 whitespace-nowrap">
            <Link href={'/player'}>
              <span className="ml-2 underline">TEST: Player</span>
            </Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
