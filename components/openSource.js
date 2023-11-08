import Image from "next/image";

export default function OpenSource() {
  return (
    <div className='snap-center min-h-screen relative flex flex-col justify-center items-center md:py-12' id="openSource">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg" />
      <div className="lg:min-h-screen relative container flex flex-col lg:flex-row justify-center items-center text-white lg:px-10 ">
        <div className="flex justify-center items-center flex-col lg:w-1/2 w-screen lg:min-h-screen lg:mb-0 mb-8">
          <div className='relative w-24 sm:w-56 h-24 sm:h-56'>
            <Image src="/shape/logo-os.svg" fill={true} objectFit="cover" alt="logo-os" />
          </div>
        </div>
        <div className="px-3 lg:w-1/2 w-screen lg:min-h-screen flex flex-col justify-center items-start">
          <div className=" font-bold text-2xl sm:text-5xl mb-2">OPEN SOURCE</div>
          <div className="font-light text-base lg:pe-10 tracking-widest text-justify">Open source adalah konsep pengembangan perangkat lunak di mana kode sumbernya dapat diakses oleh publik. Siapa pun bisa melihat, mengubah, dan mendistribusikannya sesuai lisensi yang ditetapkan.  Komunitas open source penting untuk memfasilitasi kolaborasi, pertukaran pengetahuan, mempercepat inovasi, meningkatkan transparansi dan keamanan, serta sebagai platform pengembangan akademis. </div>
        </div>
      </div>
    </div>
  )
}
