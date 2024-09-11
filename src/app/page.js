"use client"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="relative w-full h-[700px] overflow-hidden">
        <Image
          alt="Esra Güner"
          src="/background.jpeg"
          className="object-cover hidden md:block"
          fill
        />
        <Image
          alt="Esra Güner"
          src="/0.jpg"
          className="object-cover md:hidden"
          fill
        />
      </div>
      <div className="flex flex-col items-center justify-center p-16 h-fit gap-10">
        <h1 className="text-xl md:text-3xl font-bold tracking-wider " >
          Esra Güner Kimdir?
        </h1>
        <section className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center text-sm tracking-wide">
          <p className="w-full md:w-3/4 lg:w-1/4 text-justify" data-aos="flip-right">
            Esra Güner, 15 mayıs 1988 tarihinde Adapazarın‘da üç çocuklu bir
            ailenin en küçük çocuğu olarak dünyaya geldi. Müziğe olan ilgisi 5
            -6 yaşlarında başladı. Henüz ilk okulda iken okul korosu ve
            orkestrasında solistlik yaptı. 2007-2008 yılları arası tiyatro
            eğitimi aldı ve çeşitli tiyatro gruplarında yer aldı. Türkiye’nin
            büyük tiyatro ustalarıyla ('İnsan Oğlu İnsan' Ali Erdoğan,'Uyan Uyan
            Gazi Kemal' Tuncay Özinel) sahne aldı. Tiyatro ve müzik ona sahnede
            güçlü bir duruş sağladı ve ikisini bir arada sürdürmeye devam etti.
            2010 yılında 90’lı yılların ünlü ismi “Ah Canım Ahmet” ile beraber
            çalışma fırsatı buldu.{" "}
          </p>
          <p className="w-full md:w-3/4 lg:w-1/4 text-justify" data-aos="flip-left">
            Daha sonra çeşitli reklam jingle ve televizyon program
            orkestralarında vokal yaptı. Olgunlaşma dönemini bitirdiğini düşünüp
            2012 yılında redbox grubunu kurdu. Bu grup güçlü kadrosu ve müzik
            geçmişleri ve sahne performanslarıyla Türkiye’nin çeşitli
            mekanlarında sahne aldı. 2020 yılında sözü müziği kendine ait
            teklisi "rainy day" şarkısını çıkardı. Şarkıcı daha sonra "Single
            Ladies" adlı müzik gurubuna dahil olup 4 yıllık bir sürede ekibin
            solistliği yaptı ve kariyerine solo olarak devam etmek adına ekipten
            ayrıldı. Esra Güner şuan solo olarak müzikal kariyerine devam
            ediyor.
          </p>
        </section>
      </div>
      <hr className="w-full" />
      <div className="flex flex-col lg:flex-row items-center justify-center p-16 h-fit gap-12 lg:gap-24 w-full bg-zinc-100">
        <div>
          <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
            <CarouselContent>
              <CarouselItem className="w-52 md:w-64 lg:w-72 relative h-96">
                <Image
                  src={`/0.jpg`}
                  fill
                  alt="Esra Güner"
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`/1.jpg`}
                  className="absolute"
                  width={360}
                  height={640}
                  alt="Esra Güner"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`/2.jpeg`}
                  className="absolute"
                  width={360}
                  height={640}
                  alt="Esra Güner"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`/3.jpeg`}
                  className="absolute"
                  width={360}
                  height={640}
                  alt="Esra Güner"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`/4.jpeg`}
                  className="absolute"
                  width={360}
                  height={640}
                  alt="Esra Güner"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 gap-6">
          <Link
            className="flex gap-2 items-center bg-black text-white py-2 px-4 w-72 hover:bg-zinc-900 duration-200 animate-fade-right animate-once animate-fill-forwards" data-aos="fade-up"
            href="https://open.spotify.com/intl-tr/track/5k0q7d0jSiDMvdXy7PxVjf"
          >
            <FaSpotify />
            Spotify | Kaderim
          </Link>
          <Link
            className="flex gap-2 items-center bg-black text-white py-2 px-4 w-72 hover:bg-zinc-900 duration-200 animate-fade-left delay-75 animate-once animate-fill-forwards lg:relative lg:left-24" data-aos="fade-up"
            href="https://open.spotify.com/intl-tr/track/2qBGQv6k25QArWQgrAXSmp"
          >
            <FaSpotify />
            Spotify | Divinire
          </Link>
          <Link
            className="flex gap-2 items-center bg-black text-white py-2 px-4 w-72 hover:bg-gray-900 duration-200 delay-150 animate-fade-right animate-once animate-fill-forwards" data-aos="fade-up" 
            href="https://open.spotify.com/intl-tr/track/10H2Mmfj663FaF5xuafHnS"
          >
            <FaSpotify />
            Spotify | Rainy Day
          </Link>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex flex-col items-center justify-center p-16 h-fit gap-10">
        <h1 className="text-xl md:text-3xl font-bold tracking-wider ">
          İletişim
        </h1>
        <p id="iletisim" className="text-zinc-700">esragunermusic@gmail.com</p>
      </div>
    </div>
  );
}
