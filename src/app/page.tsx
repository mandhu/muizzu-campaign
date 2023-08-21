import Image from 'next/image'

export default function Home() {
  return (
      <Image
          fill
          quality={100}
          src="/vote_4_mizzu.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Picture of the author"
          objectFit={'contain'}
      />
    // <main className="flex min-h-screen items-center justify-center">
    //     {/*<img src="/vote_4_mizzu.jpg" alt="Vote 4 muizzu" className="h-full"/>*/}
    //
    // </main>
  )
}
