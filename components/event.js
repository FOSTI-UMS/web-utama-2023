import Image from "next/image";

export default function Event() {
  return (
    <div className='min-h-screen relative container' id="event">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg"/>
      <h1 className="text-red-700">Event</h1>
    </div>
  )
}
