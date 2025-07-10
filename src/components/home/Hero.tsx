import { Droplet, Heart, LockKeyholeOpen, RotateCw, Scan } from "lucide-react";
import Image from "next/image";
import { Categories } from "../../components/home/components/Categories";
import { Button } from "../Button";

export function Hero() {
  return (
    <>
      < div className="flex gap-10 mt-25 max-w-sm m-auto md:max-w-xl lg:max-w-5xl" >

        <div className="max-w-2xl flex flex-col gap-8">
          <h1 className="text-5xl font-bold md:text-5xl">Aprender é a chave para o seu sucesso. Obtenha cursos personalizados.</h1>
          <p className="text-gray-400 md:text-sm">Incorpore recursos financeiros poderosos ao seu produto e lance <br /> em algumas semanas.</p>
          <div className="flex gap-5">
            <Button name="Começar" />

            <button className="flex gap-3 bg-gray-100 text-gray-400 px-3 py-1.5 rounded-lg lg:px-8 lg:py-2 hover:cursor-pointer">Como funciona?</button>
          </div>
        </div>

        <Image src="/hero-image.png" alt="." height={300} width={400} priority className="hidden lg:block" />

      </div >


      < div className="max-w-sm m-auto md:max-w-xl lg:max-w-5xl" >
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