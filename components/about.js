import Image from "next/image";

export default function About() {
  return (
    <div className="snap-center min-h-screen relative flex lg:flex-row justify-center items-center lg:px-12" id="about">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg" />
      <div className="flex-col-reverse lg:flex-row lg:min-h-screen relative container flex justify-center items-center text-white lg:px-10">
        <div className="text-[#1E3259] lg:ps-10 px-4 pt-3 lg:pt-0 lg:w-1/2 w-screen lg:min-h-screen flex flex-col justify-center lg:items-end">
          <div className="font-bold text-4xl lg:text-5xl mb-2">About Us</div>
          <div className="font-base text-base tracking-widest text-justify">
            Open source adalah konsep pengembangan perangkat lunak di mana kode sumbernya dapat diakses oleh publik. Siapa pun bisa melihat, mengubah, dan mendistribusikannya sesuai lisensi yang ditetapkan. Komunitas open source penting
            untuk memfasilitasi kolaborasi, pertukaran pengetahuan, mempercepat inovasi, meningkatkan transparansi dan keamanan, serta sebagai platform pengembangan akademis.{" "}
          </div>
        </div>
        <div className="lg:w-1/2 w-64 lg:min-h-screen flex justify-end items-center">
          <Image src="/shape/about.svg" height={350} width={350} alt="about" />
        </div>
      </div>
    </div>
  );
}
