import { IoMenuSharp } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const SideMenu = () => {
  return (
        <Sheet > 
            <SheetTrigger><IoMenuSharp size={35} color="pink"/></SheetTrigger>
            <SheetContent className="z-50 bg-zinc-900 border-none ">
              <SheetHeader className="mt-8">
                <Link href="/galeri" className="text-white border-y-[1px] border-zinc-800 w-full py-2">
                <SheetTitle className="text-white font-normal">Galeri</SheetTitle>
                <SheetDescription>
                </SheetDescription>
                </Link>
              </SheetHeader>
              <SheetHeader>
                <Link href="/#iletisim" className=" border-b-[1px] border-zinc-800 w-full py-2">
                <SheetTitle className="text-white font-normal">İletişim</SheetTitle>
                <SheetDescription>
                </SheetDescription>
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
  )
  
}

export default SideMenu