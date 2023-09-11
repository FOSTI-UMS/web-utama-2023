import Image from "next/image";

export default function OpenSource() {
  return (
    <div className='min-h-screen relative container' id="openSource">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg"/>
      <h1 className="text-white">OpenSource</h1>
    </div>
  )
}
