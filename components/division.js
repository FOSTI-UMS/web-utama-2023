import Image from "next/image";

export default function Division() {
  return (
    <div className='min-h-screen relative container' id="division">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg"/>
      <h1 className="text-white">Division</h1>
    </div>
  )
}
