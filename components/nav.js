import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Nav() {
  const [showMenu, setShowMenu] = useState(false)
  const [currentMenu, setCurrentMenu] = useState({
    home: false,
    openSource: false,
    about: false,
    division: false,
    event: false,
    joinUs: false,
  })
  return (
        <header className="fixed mt-4 top-0 w-full z-10">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 px-2 sm:px-4 items-center justify-between bg-[#EB916B] rounded-md border border-gray-100">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <button type="button" onClick={()=>setShowMenu(!showMenu)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-[#ad694b] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  <svg className={`${showMenu? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg className={`${showMenu? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-shrink-0 items-center p-1">
                <Image width={80} height={80} src="/logo-fosti.png" alt="Logo Fosti"/>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/" 
                    onClick={()=>setCurrentMenu({
                      home: true,
                      openSource: false,
                      about: false,
                      division: false,
                      event: false,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.home ? 'bg-[#ad694b]': ''} text-white rounded-md px-3 py-2 text-sm font-medium`} aria-current="page">Home</Link>
                    <Link href="#openSource" 
                    onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: true,
                      about: false,
                      division: false,
                      event: false,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.openSource ? 'bg-[#ad694b]': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Open Source</Link>
                    <Link href="#about" 
                    onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: false,
                      about: true,
                      division: false,
                      event: false,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.about ? 'bg-[#ad694b]': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>About</Link>
                    <Link href="#division" 
                    onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: false,
                      about: false,
                      division: true,
                      event: false,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.division ? 'bg-[#ad694b]': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Division</Link>
                    <Link href="#event" 
                    onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: false,
                      about: false,
                      division: false,
                      event: true,
                      joinUs: false,
                    })} className={`${currentMenu.event ? 'bg-[#ad694b]': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Event</Link>
                    <Link href="#joinUs" 
                    onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: false,
                      about: false,
                      division: false,
                      event: false,
                      joinUs: true,
                    })} className={`${currentMenu.joinUs ? 'bg-[#ad694b]': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Join Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className={`${showMenu? 'block' : 'hidden'} sm:hidden `}>
            <div className="space-y-1 px-2 pb-3 pt-2 mx-2 bg-[#EB916B] rounded-md border-l border-r border-b border-gray-100">
              <Link href="/" 
              onClick={()=>setCurrentMenu({
                      home: true,
                      openSource: false,
                      about: false,
                      division: false,
                      event: false,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.home ? 'bg-[#ad694b]': ''} text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page`}>Home</Link>
              <Link href="#openSource" 
              onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: true,
                      about: false,
                      division: false,
                      event: false,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.openSource ? 'bg-gray-900': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Open Source</Link>
              <Link href="#about" 
              onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: false,
                      about: true,
                      division: false,
                      event: false,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.about ? 'bg-gray-900': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>About</Link>
              <Link href="#division" 
              onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: false,
                      about: false,
                      division: true,
                      event: false,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.division ? 'bg-gray-900': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Division</Link>
              <Link href="#event" 
              onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: false,
                      about: false,
                      division: false,
                      event: true,
                      joinUs: false,
                    })} 
                    className={`${currentMenu.event ? 'bg-gray-900': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Event</Link>
              <Link href="#joinUs" 
              onClick={()=>setCurrentMenu({
                      home: false,
                      openSource: false,
                      about: false,
                      division: false,
                      event: false,
                      joinUs: true,
                    })} 
                    className={`${currentMenu.joinUs ? 'bg-gray-900': ''} text-gray-100 hover:bg-[#ad694b] hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Join Us</Link>
            </div>
          </div>
        </header>
  )
}

export default Nav