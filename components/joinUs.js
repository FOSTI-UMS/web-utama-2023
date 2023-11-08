import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  const envDate = Date.parse(process.env.JOIN_US_DATETIME ?? Date.now());
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  function counDownInterval() {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = envDate - now;
      
      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setDays(addZero(Math.floor(distance / (1000 * 60 * 60 * 24))));
      setHours(addZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
      setMinutes(addZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))));
      setSeconds(addZero(Math.floor((distance % (1000 * 60)) / 1000)));
    }, 1000);
  }

  useEffect(() => {
  //  counDownInterval()
  }, [])

  return (
    <div className='snap-center min-h-screen relative flex flex-col justify-center items-center text-white' id="joinUs">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg"/>
      <div className="font-bold text-2xl sm:text-4xl mb-4">Lets Join FOSTI Now!</div>
      {/* <div className="font-bold text-4xl sm:text-7xl my-8">
        {days} : {hours} : {minutes} : {seconds}
      </div> */}
      <Link href='https://oprec.fostiums.org/' target="_blank" className="w-fit font-normal text-sm rounded-md py-2 px-8 bg-brand-orange hover:bg-[#f08557]">Join With Us</Link>
    </div>
  )
}
