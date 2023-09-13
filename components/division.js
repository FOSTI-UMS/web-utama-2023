import Image from "next/image";
import Card from "./card";

export default function Division() {
 
  const dataCard=[
    {
      name: 'ristek',
      title:'Keilmuan & Riset Teknologi',
      description:'Divisi yang mengulas dan mengimplementasikan teknologi saat ini'
    },
    {
      name: 'keor',
      title:'Keorganisaian',
      description:'Divisi yang mengurus pengkaderan, internal dan juga event FOSTI '
    },
    {
      name: 'hubpub',
      title:'Hubungan Publik',
      description:'Divisi yang berkutat di bagian informasi dan media sosial FOSTI'
    },

  ]
  return (
    <div className="snap-center min-h-screen text-center relative text-white flex lg:flex-row justify-center items-center lg:px-12" id="division">
      <Image fill={true} objectFit="cover" className="-z-10" src="/bg/bg-dark.svg" alt="Bg" />
      <div className="lg:flex flex-col justify-center items-center lg:flex-col lg:min-h-screen">
        <div className="font-bold text-4xl lg:mt-0 mt-6">Division</div>
        <div className="lg:flex lg:flex-row flex-col grid-rows-3 gap-20">
          {
            dataCard&&(
              dataCard.map(data=>{
                return <Card key={data.name} name={data.name} title={data.title} description={data.description} />
              })
            )
          }
        </div>
      </div>

    </div>
  );
}
