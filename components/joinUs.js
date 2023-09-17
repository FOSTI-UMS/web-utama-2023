import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  return (
    <div className='snap-center min-h-screen relative flex flex-col justify-center items-center text-white' id="joinUs">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg"/>
      <div className="font-bold text-2xl sm:text-4xl">Lets Join FOSTI Now!</div>
      <div className="font-bold text-4xl sm:text-7xl my-8">00 : 00 : 00 : 00</div>
      <Link href='https://oprec.fostiums.org/' target="_blank" className="w-fit font-normal text-sm rounded-md py-2 px-8 bg-brand-orange hover:bg-[#f08557]">Join With Us</Link>

    </div>
  )
}
