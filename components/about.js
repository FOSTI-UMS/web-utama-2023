import Image from "next/image";

export default function About() {
  return (
    <div className="snap-center min-h-screen relative flex sm:flex-row justify-center items-center sm:px-12" id="about">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg" />
      <div className="flex-col-reverse sm:flex-row sm:min-h-screen relative container flex justify-center items-center text-white sm:px-10">
        <div className="text-[#1E3259] sm:ps-10 px-4 pt-3 sm:pt-0 sm:w-1/2 w-screen sm:min-h-screen flex flex-col justify-center sm:items-end">
          <div className="font-bold text-2xl sm:text-5xl mb-2">About Us</div>
          <div className="font-base text-base tracking-widest text-justify">
            Open source adalah konsep pengembangan perangkat lunak di mana kode sumbernya dapat diakses oleh publik. Siapa pun bisa melihat, mengubah, dan mendistribusikannya sesuai lisensi yang ditetapkan. Komunitas open source penting
            untuk memfasilitasi kolaborasi, pertukaran pengetahuan, mempercepat inovasi, meningkatkan transparansi dan keamanan, serta sebagai platform pengembangan akademis.{" "}
          </div>
        </div>
        <div className="sm:w-1/2 w-64 sm:min-h-screen flex justify-center items-center">
          <div className='relative w-32 sm:w-72 h-32 sm:h-72 mt-24 sm:mt-0'>
            <Image src="/shape/about.svg"  fill={true} objectFit="cover" alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}
