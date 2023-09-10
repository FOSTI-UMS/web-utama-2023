import Image from "next/image";

export default function JoinUs() {
  return (
    <div className='min-h-screen relative container'>
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg"/>
      <h1 className="text-white">JoinUs</h1>
    </div>
  )
}
