'use client'

export default function Home() {

  const handleClick = () => {
    console.log(process.env.NEXT_PUBLIC_TEST_MESSAGE)
  }

  return (
    <>
      <h1>Hello NextJS + TS + PNPM</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
