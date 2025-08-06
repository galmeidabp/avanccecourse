import { Droplet, Heart, LockKeyholeOpen, RotateCw, Scan } from "lucide-react";
import { CategoriesCard } from "./CategorieCard";

export function Categories() {
  return (
    < div data-aos="fade-down" className="max-w-sm m-auto flex flex-col justify-center items-center md:items-start  mb-8 md:max-w-xl lg:max-w-5xl" >
      <h2 className="text-3xl font-bold mt-25">Explore por <br /> categorias</h2>
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 md:mt-10">
        <CategoriesCard title="Segurança avançada" Icon={LockKeyholeOpen} iconColor="text-amber-400" bgColor="bg-amber-200" />
        <CategoriesCard title={`Boa\nsemântica`} Icon={Scan} iconColor="text-red-400" bgColor="bg-red-200" />
        <CategoriesCard title="Componentes separados" Icon={Droplet} iconColor="text-cyan-400" bgColor="bg-cyan-200" cardBg="bg-gray-100" textCard="text-gray-900" />
        <CategoriesCard title="Carregamento rápido" Icon={RotateCw} iconColor="text-orange-400" bgColor="bg-orange-200" />
        <CategoriesCard title="Amado por milhares" Icon={Heart} iconColor="text-indigo-400" bgColor="bg-indigo-200" />
      </div>
    </div >
  )
}