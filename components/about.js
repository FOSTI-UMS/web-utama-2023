import Image from "next/image";

export default function About() {
  return (
    <div className="snap-center min-h-screen relative flex sm:flex-row justify-center items-center sm:px-12" id="about">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-light.svg" alt="Bg" />
      <div className="flex-col-reverse lg:flex-row relative container flex justify-center items-center text-white py-10 sm:px-10">
        <div className="text-[#1E3259] sm:ps-10 px-4 pt-3 sm:pt-0 lg:w-1/2 w-screen flex flex-col justify-center">
          <div className="font-bold text-2xl sm:text-5xl mb-2">About Us</div>
          <div className="font-base text-base tracking-widest text-justify">
          Forum Open Source Teknik Informatika (FOSTI) adalah Unit Kegiatan Mahasiswa di tingkat fakultas, yang tepatnya berada di bawah Fakultas Komunikasi dan Informatika UMS. FOSTI bergerak di bidang teknologi khususnya mempelajari, memperdalam, dan menyebarkan Open Source. Selain itu, FOSTI juga aktif dalam pengembangan bidang keorganisasian yang berkontribusi pada kemajuan dan pengembangan diri anggotanya.
          </div>
        </div>
        <div className="sm:w-1/2 w-64 flex justify-center items-center">
          <div className='relative w-32 sm:w-72 h-32 sm:h-72 mt-10 sm:mt-0'>
            <Image src="/shape/about.svg"  fill={true} objectFit="cover" alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}
