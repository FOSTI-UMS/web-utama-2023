import Image from "next/image";

export default function Division() {
  return (
    <div className="min-h-screen text-center relative text-white flex lg:flex-row justify-center items-center lg:px-12" id="division">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg" />
      <div className="lg:flex flex-col justify-center items-center lg:flex-col lg:min-h-screen">
        <div className="font-bold text-4xl lg:mt-0 mt-6">Division</div>
        <div className="lg:flex lg:flex-row flex-col grid-rows-3 gap-20">
          <div className="flex flex-col justify-center items-center max-w-lg mx-auto my-10 rounded-3xl drop-shadow-2xl py-10 px-5 bg-[#38405E] w-72">
            <Image src="/shape/ristek.svg" height={50} width={50} alt="ristek" />
            <div className="text-center text-base font-medium my-3">Keilmuan & Riset Teknologi</div>
            <div className="text-center font-light mt-1 text-xs mb-3">Divisi yang mengulas dan mengimplementasikan teknologi saat ini</div>
            <button className="text-xs font-medium text-[#7A9D54]">
              Selengkapnya <span className="text-lg">{"→"}</span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center max-w-lg mx-auto my-10 rounded-3xl drop-shadow-2xl py-10 px-5 bg-[#38405E] w-72">
            <Image src="/shape/keor.svg" height={50} width={50} alt="keor" />
            <div className="text-center text-base font-medium my-3">Keorganisaian</div>
            <div className="text-center font-light mt-1 text-xs mb-3">Divisi yang mengurus pengkaderan, internal dan juga event FOSTI </div>
            <button className="text-xs font-medium text-[#7A9D54]">
              Selengkapnya <span className="text-lg">{"→"}</span>
            </button>
          </div>
          <div className=" flex flex-col justify-center items-center max-w-lg mx-auto my-10 rounded-3xl drop-shadow-2xl py-10 px-5 bg-[#38405E] w-72">
            <Image src="/shape/hupub.svg" height={50} width={50} alt="hupub" />
            <div className="text-center text-base font-medium my-3">Hubungan Publik</div>
            <div className="text-center font-light mt-1 text-xs mb-3">Divisi yang berkutat di bagian informasi dan media sosial FOSTI</div>
            <button className="text-xs font-medium text-[#7A9D54]">
              Selengkapnya <span className="text-lg">{"→"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
