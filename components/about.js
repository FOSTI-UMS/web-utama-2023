import Image from "next/image";

export default function About() {
  return (
    <div className='min-h-screen relative container' id="about">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg"/>
      <h1 className="text-red-700">About</h1>
    </div>
  )
}
