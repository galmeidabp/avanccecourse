import Image from "next/image";
import { Button } from "../Button";
import { Categories } from "./components/Categories";

export function Hero() {
  return (
    <>
      < div data-aos="fade-down" className="flex gap-10 items-center my-40 max-w-sm m-auto md:max-w-xl lg:max-w-5xl" >

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
      <Categories />
      
    </>
  )
}