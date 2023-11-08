import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <footer className="snap-center bg-gray-800 text-white py-12 px-2 sm:px-0">
        <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <div data-aos="fade-up">
                <h3 className="text-2xl font-bold mb-4">FOSTI UMS</h3>
                <p className="text-gray-300">Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta</p>
              </div>
            </div>
            <div className="w-full lg:w-1/6 mb-4 lg:mb-0">
              <div data-aos="fade-up" data-aos-delay="200">
                <h5 className="text-xl font-semibold mb-2">Layanan</h5>
                <ul className="text-gray-300">
                  <li><a href="#" className="hover:text-white">Privacy & Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/6 mb-4 lg:mb-0">
              <div data-aos="fade-up" data-aos-delay="200">
                <h5 className="text-xl font-semibold mb-2">Other</h5>
                <ul className="text-gray-300">
                  <li><a href="https://github.com/FOSTI-UMS" className="hover:text-white">Github</a></li>
                  <li><a href="https://blog.fostiums.org/" className="hover:text-white">Blog</a></li>
                  <li><a href="https://event.fostiums.org/" className="hover:text-white">Event</a></li>
                  <li><a href="https://fosclass.fostiums.org/" className="hover:text-white">Fosclass</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/4 lg:ml-auto">
              <div data-aos="fade-up" data-aos-delay="400">
                <h5 className="text-xl font-semibold mb-2">Address</h5>
                <p className="text-gray-300 mb-2">Jl. Ahmad Yani, Pabelan, Kartasura, Surakarta 57162</p>
                <div className="social-media">
                  <ul className="flex">
                    <li className="hover:bg-blue-500 rounded-md mr-4">
                      <Link href="http://instagram.com/fosti_ums"><Image className='text-white p-1' width={30} height={30} alt='Icon Instagram fosti' src='/icon/ig.svg'/></Link>
                    </li>
                    <li className="hover:bg-blue-500 rounded-md mr-4">
                      <Link href="https://tiktok.com/@fosti.ums"><Image className='text-white p-1' width={30} height={30} alt='Icon TikTok Fosti' src='/icon/tk.svg'/></Link>
                    </li>
                    <li className="hover:bg-blue-500 rounded-md mr-4">
                      <Link href="https://www.youtube.com/@fostiums"><Image className='text-white p-1' width={30} height={30} alt='Icon YouTube Fosti' src='/icon/yt.svg'/></Link>
                    </li>
                    <li className="hover:bg-blue-500 rounded-md mr-4">
                      <Link href="https://www.facebook.com/Fosti.Umsurakarta/"><Image className='text-white p-1' width={30} height={30} alt='Icon Facebook Fosti' src='/icon/fb.svg'/></Link>
                    </li>
                    <li  className="hover:bg-blue-500 rounded-md" >
                      <Link href="https://twitter.com/fostiums"><Image className='text-white p-1' width={30} height={30} alt='Icon X Fosti' src='/icon/x.svg'/></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <section className="bg-gray-800 text-white pb-2">
        <div className="container mx-auto">
          <div className="text-center">
            <footer className="text-gray-300 flex justify-center flex-col sm:flex-row">
              <p>&copy; All rights reserved - {new Date().getFullYear()} </p> 
              <p className='sm:ml-1'>| Created by Fosti with <Image className='invert inline' width={20} height={20} alt='icon fosti' src='/icon/hand.svg'/></p>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer