import { Droplet, Heart, LockKeyholeOpen, RotateCw, Scan } from "lucide-react";
import Image from "next/image";
import { Categories } from "../../components/home/components/Categories";
import { Button } from "../Button";

export function Hero() {
  return (
    <>
      < div className="flex gap-10 items-center my-40 max-w-sm m-auto md:max-w-xl lg:max-w-5xl" >

        <div className="max-w-2xl flex flex-col gap-8">
          <h1 className="text-5xl font-bold md:text-5xl">Aprender é a chave para o seu <span className="text-cyan-300">sucesso</span>.</h1>
          <p className="text-gray-400 md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil odit totam, numquam accusamus incidunt eius corporis veniam expedita </p>
          <div className="flex gap-5">
            <Button name="Começar" />

            <button className="flex gap-3 bg-gray-100 text-sky-600 duration-300 font-semibold px-3 py-1.5 rounded lg:px-8 lg:py-2 hover:cursor-pointer transition-all ease-in-out hover:ring-2 hover:ring-sky-300 hover:ring-offset-2 hover:ring-offset-neutral-900 hover:bg-transparent">Como funciona?</button>
          </div>
        </div>
        <Image src="/hero-img.png" alt="Duas pessoas com um computador" height={300} width={400} priority className="hidden lg:block rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-sky-300 hover:ring-offset-2 hover:ring-offset-black" />

      </div >

      < div className="max-w-sm m-auto mb-8 md:max-w-xl lg:max-w-5xl" >
        <h2 className="text-3xl font-bold mt-25">Explore por <br /> categorias</h2>
        <div className="grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 md:mt-10">
          <Categories title="Segurança avançada" Icon={LockKeyholeOpen} iconColor="text-amber-400" bgColor="bg-amber-200" />
          <Categories title={`Boa\nsemântica`} Icon={Scan} iconColor="text-red-400" bgColor="bg-red-200" />
          <Categories title="Componentes separados" Icon={Droplet} iconColor="text-cyan-400" bgColor="bg-cyan-200" cardBg="bg-gray-100" textCard="text-gray-900" />
          <Categories title="Carregamento rápido" Icon={RotateCw} iconColor="text-orange-400" bgColor="bg-orange-200" />
          <Categories title="Amado por milhares" Icon={Heart} iconColor="text-indigo-400" bgColor="bg-indigo-200" />
        </div>
      </div >
    </>
  )
}