import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-24 items-center">
      <span className='text-5xl'>Hola Mundo!!!</span>
      <Link href={'/about'}>About Page</Link>
    </main>
  )
}
