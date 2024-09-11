import Galeri from "@/components/Galeri";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-8 pt-36 min-h-screen w-full bg-zinc-900 items-center justify-center">
      <h1 className="font-semibold text-5xl tracking-widest text-zinc-300">GALERİ</h1>
      <Galeri />
    </div>
  );
};

export default page;
