import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
        {/*<img src="/vote_4_mizzu.jpg" alt="Vote 4 muizzu" className="h-full"/>*/}
        <Image
            fill
            quality={100}
            src="/vote_4_mizzu.jpg"
            alt="Picture of the author"
        />
    </main>
  )
}
