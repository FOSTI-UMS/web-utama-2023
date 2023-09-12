import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col-reverse lg:flex-row min-h-screen relative flex justify-center items-center text-white lg:px-12">
    <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg.svg" alt="Bg"/>
      <div id="hero" className="flex justify-center items-start flex-col w-screen px-3 lg:w-1/2 lg:min-h-screen lg:pt-5">
        <div className="text-xl lg:text-lg mt-12 ms-1 mb-1 font-bold ">Welcome To</div>
        <div className="text-3xl lg:text-7xl mb-2 tracking-wide font-bold">Forum Open Source Teknik Informatika</div>
        <div className="text-lg lg:text-xl mb-5 font-thin">Universitas Muhammadiyah Surakarta</div>
        <button className="font-normal text-sm rounded-md py-2 px-8 bg-[#EB916B] hover:bg-[#f08557]">Explore About Us</button>
      </div>
      <div className="video-wrapper lg:w-1/2 w-screen lg:min-h-screen flex justify-center items-center">
        <iframe className="w-11/12 h-52 lg:w-5/6 sm:h-80" src="https://www.youtube.com/embed/qW3pRQ5-hS0" allow="autoplay" title="YouTube Video"></iframe>
      </div>
    </div>
  );
}
