import Image from "next/image";

export default function Event() {
  return (
    <div className="min-h-screen relative flex lg:flex-row justify-center items-center lg:px-12" id="event">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg" />
      <div className="flex-col-reverse lg:flex-row lg:min-h-screen relative container flex justify-center items-center text-white lg:px-12">
        <div className="text-[#1E3259] lg:ps-10 px-4 pt-3 lg:pt-0 lg:w-1/2 w-screen lg:min-h-screen flex flex-col justify-center">
          <div className="font-bold text-4xl mt-12 mb-2">Latest FOSTI Event</div>
          <div className="font-bold text-xl mb-3 text-[#AB142A]">Female In Tech 4.0 2022</div>
          <div className="font-base text-base tracking-widest text-justify">
            Tema kita kali ini yaitu "Start Your Journey as a Woman Developer" dengan Pembicara keren kita Kakak Veronica Anggraini, seorang Android and Flutter Enthusiast. Webinar kita kali ini GRATIS! Jadi jangan sampai kelewatan ya!
          </div>
          <div className="flex mb-2 mt-3">
            <Image className="me-3" src="/shape/date.svg" width={20} height={20} alt="date" />
            <div>Tanggal : 27-11-2022</div>
          </div>
          <div className="flex mb-2">
            <Image className="me-3" src="/shape/time.svg" width={20} height={20} alt="date" />
            <div>Waktu : 07.00 WIB</div>
          </div>
          <div className="flex mb-4">
            <Image className="me-3" src="/shape/place.svg" width={20} height={20} alt="date" />
            <div>Tempat : Zoom</div>
          </div>
          <button className="text-white font-normal w-52 text-sm rounded-md py-2 px-8 bg-[#EB916B] hover:bg-[#f08557]">Selengkapnya</button>
        </div>
        <div className="w-1/2 lg:min-h-screen flex justify-end items-center">
          <Image src="/shape/event.svg" height={350} width={350} alt="about" />
        </div>
      </div>
    </div>
  );
}
