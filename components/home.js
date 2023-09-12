import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col-reverse sm:flex-row min-h-screen relative container flex justify-center items-center text-white sm:px-10">
      <div id="hero" className="flex justify-center items-start flex-col w-screen px-3 sm:w-1/2 sm:min-h-screen">
        <div className="text-xl sm:text-lg mt-12 ms-1 mb-1 font-bold ">Welcome To</div>
        <div className="text-3xl sm:text-7xl mb-2 tracking-wide font-bold">Forum Open</div>
        <div className="text-3xl sm:text-7xl mb-2 tracking-wide font-bold">Source Teknik</div>
        <div className="text-3xl sm:text-7xl mb-2 tracking-wide font-bold">Informatika</div>
        <div className="text-lg sm:text-xl mb-2 font-thin">Universitas Muhammadiyah Surakarta</div>
        <button className="font-semibold rounded-md py-1 px-5 bg-[#EB916B] hover:bg-[#f08557]">Explore About Us</button>
      </div>
      <div className="video-wrapper w-1/2 sm:min-h-screen flex justify-center items-center">
        <iframe className="w-screen h-50 sm:w-5/6 sm:h-80" src="https://www.youtube.com/embed/qW3pRQ5-hS0" allow="autoplay" title="YouTube Video"></iframe>
      </div>
    </div>
  );
}
