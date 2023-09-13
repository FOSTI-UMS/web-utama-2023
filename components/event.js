import Image from "next/image";
import Link from "next/link";

export default function Event() {
  return (
    <div className="snap-center min-h-screen relative flex lg:flex-row justify-center items-center lg:px-12" id="event">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg" />
      <div className="flex-col-reverse lg:flex-row lg:min-h-screen relative container flex justify-center items-center text-white lg:px-12  py-8 sm:py-0">
        <div className="text-[#1E3259] lg:ps-10 px-4 pt-8 lg:pt-0 lg:w-1/2 w-screen lg:min-h-screen flex flex-col justify-center">
          <div className="font-bold text-2xl sm:text-4xl mb-2">Latest FOSTI Event</div>
          <div className="font-bold text-lg sm:text-xl mb-3 text-[#AB142A]">FOSTIFEST 2023</div>
          <div className="font-base text-base tracking-widest text-justify">
            {`FOSTIFEST 2023 merupakan ajang yang keempat dengan mengusung tema "The Art of Proficiency and Landing Page Allure"`}
          </div>
          <div className="flex mb-2 mt-3">
            <Image className="me-3" src="/shape/date.svg" width={20} height={20} alt="date" />
            <div>Tanggal : 29-10-2023</div>
          </div>
          <div className="flex mb-2">
            <Image className="me-3" src="/shape/time.svg" width={20} height={20} alt="date" />
            <div>Waktu : 08.00 WIB</div>
          </div>
          <div className="flex mb-4">
            <Image className="me-3" src="/shape/place.svg" width={20} height={20} alt="date" />
            <div>Tempat : Gedung J Seminar 2</div>
          </div>
          <Link href={'https://fostifest.fostiums.org/'} target="_blank" className="text-white font-normal w-52 text-sm rounded-md py-2 px-8 bg-[#EB916B] hover:bg-[#f08557]">Selengkapnya</Link>
        </div>
        <div className="w-1/2 lg:min-h-screen flex justify-end items-center">
          <Image src="/shape/event.png" height={350} width={350} alt="about" />
        </div>
      </div>
    </div>
  );
}
