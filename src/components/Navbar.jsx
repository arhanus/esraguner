import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import SideMenu from './SideMenu'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 bg-transparent fixed z-50">
        <Link href="/">
            <Image alt="Esra Güner" src={"/logo.png"} width={140} height={140}></Image>
        </Link>
        <div className="items-center gap-6 hidden lg:flex">
          <Link href="/galeri"><Button variant="outline"  >Galeri</Button></Link>
          <Link href="/#iletisim"  ><Button  className="border-[1px] border-pink-400 bg-pink-400 hover:bg-transparent hover:text-pink-400 text-white  duration-300">İletişim</Button></Link>
        </div>
        <div className="lg:hidden">
          <SideMenu />
        </div>
    </div>
  )
}

export default Navbar