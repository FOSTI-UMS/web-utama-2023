import Image from "next/image";

export default function OpenSource() {
  return (
    <div className='min-h-screen relative container flex flex-col justify-center items-center' id="openSource">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg"/>
      <div className="sm:min-h-screen relative container flex flex-col sm:flex-row justify-center items-center text-white sm:px-10 ">
      <div className="flex justify-center items-center flex-col sm:w-1/2 w-screen sm:min-h-screen mb-4">
        <Image src="/shape/logo-os.svg" width={200} height={200} alt="logo-os" sizes="(max-width: 768px) h-50 w-50"/>
      </div>
      <div className="px-3 pt-3 sm:pt-0 sm:w-1/2 w-screen sm:min-h-screen flex flex-col justify-center items-start">
        <div className=" font-bold text-4xl mb-2">OPEN SOURCE</div>
        <div className="font-light text-base sm:pe-10 tracking-widest text-justify">Open source adalah konsep pengembangan perangkat lunak di mana kode sumbernya dapat diakses oleh publik. Siapa pun bisa melihat, mengubah, dan mendistribusikannya sesuai lisensi yang ditetapkan.  Komunitas open source penting untuk memfasilitasi kolaborasi, pertukaran pengetahuan, mempercepat inovasi, meningkatkan transparansi dan keamanan, serta sebagai platform pengembangan akademis. </div>
      </div>
      </div>
    </div>
  )
}
