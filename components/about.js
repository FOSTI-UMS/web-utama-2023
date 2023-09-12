import Image from "next/image";

export default function About() {
  return (
    <div className='min-h-screen relative container flex sm:flex-row justify-center items-center' id="about">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg"/>
      <div className="flex-col-reverse sm:flex-row sm:min-h-screen relative container flex justify-center items-center text-white sm:px-10">
      <div className="text-[#1E3259] px-3 pt-3 sm:pt-0 sm:w-1/2 w-screen sm:min-h-screen flex flex-col justify-center sm:items-end">
        <div className="font-bold text-2xl mb-2">About Us</div>
        <div className="font-base text-base tracking-widest text-justify">Open source adalah konsep pengembangan perangkat lunak di mana kode sumbernya dapat diakses oleh publik. Siapa pun bisa melihat, mengubah, dan mendistribusikannya sesuai lisensi yang ditetapkan.  Komunitas open source penting untuk memfasilitasi kolaborasi, pertukaran pengetahuan, mempercepat inovasi, meningkatkan transparansi dan keamanan, serta sebagai platform pengembangan akademis. </div>
      </div>
      <div className="w-1/2 sm:min-h-screen flex justify-center items-center">
        <Image src="/shape/about.svg" height={300} width={300} alt="about"/>
      </div>
    </div>
    </div>
  )
}
