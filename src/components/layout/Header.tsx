import { ChevronDown } from "lucide-react";
import { Button } from "../Button";

export function Header() {
  return (
    <div className="flex justify-between items-center py-5 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
      <div className="flex lg:gap-2">
        <p className="font-black text-blue-500 text-3xl">L</p>
        <h1 className="hidden lg:block lg:text-3xl">LOGO</h1>
      </div>

      <ul className="flex gap-3 text-gray-400 md:gap-8 lg:gap-10">
        <li className="hover:cursor-pointer hover:text-blue-400">Home</li>
        <li className="flex gap-1 items-center hover:cursor-pointer hover:text-blue-400">Cursos <ChevronDown className="h-4 hidden md:block" /></li>
        <li className="flex gap-1 items-center hover:cursor-pointer hover:text-blue-400">Blog <ChevronDown className="h-4 hidden md:block" /></li>
        <li className="hover:cursor-pointer hover:text-blue-400">Contato</li>
      </ul>
      
      <Button name="Saber Mais" />
    </div>
  )
}