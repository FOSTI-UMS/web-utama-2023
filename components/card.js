import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function Card({name, title, description}) {
  const [isOpen, setIsOpen] = useState(false)
  const [txtModal, setTxtModal] = useState({
    title:'',
    description:'',
  })


  function closeModal() {
    setIsOpen(false)
  }

  function openModal(division) {
    setIsOpen(true);
    if(division === 'ristek'){
      setTxtModal({
        title:'Keilmuan dan Riset Teknologi',
        description:'Divisi yang melakukan penelitian, pengembangan dan pembelajaran teknologi open source yang kemudian disampaikan kepada seluruh anggota FOSTI UMS serta masyarakat umum.',
      })
    }
    else if(division === 'keor'){
      setTxtModal({
        title:'Keorganisasian',
        description:'Divisi yang menciptakan hubungan persaudaraan yang erat dan menjalin kerja sama yang baik antar anggota FOSTI UMS, mengadakan pembelajaran untuk meningkatkan pengetahuan dan pemahaman tentang keorganisasian di FOSTI UMS serta mempersiapkan calon anggota baru FOSTI UMS untuk periode kepengurusan selanjutnya.',
      })
    }
    else if(division === 'hubpub'){
      setTxtModal({
        title:'Hubungan Publik',
        description:'Divisi yang menjalin hubungan dan kerja sama dengan badan, lembaga, komunitas atau organisasi lain untuk mengenalkan dan menyebarkan open source dan juga FOSTI UMS ke dalam maupun ke luar lingkup universitas.',
      })
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-lg my-5 rounded-3xl py-3 px-2 sm:py-10 sm:px-5 w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className='relative w-8 sm:w-10 h-8 sm:h-10'>
          <Image src={`/shape/${name}.svg`} fill={true} objectFit="cover" alt={title} />
        </div>
        <div className="text-center text-base font-medium my-1 sm:my-3">{title}</div>
        <div className="text-center font-light mt-1 text-xs mb-3">{description}</div>
        <button 
        onClick={()=>openModal(name)}
        className="text-xs font-medium bg-brand-orange text-white px-4 py-1 rounded-md flex items-center">
          Selengkapnya
        </button>
      </div>

      {/* MODAL SECTION */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {txtModal.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {txtModal.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Card