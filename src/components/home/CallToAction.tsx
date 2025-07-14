import Image from "next/image";
import { Button } from "../Button";

export function CallToAction() {
  return (
    <div className="m-auto max-w-sm md:max-w-xl lg:max-w-4xl">

      <div className="flex flex-col-reverse gap-5 mt-30 items-center md:gap-20 md:flex-row">
        <div className="">
          <h2 className="text-3xl font-bold mb-5">Participe da nossa equipe</h2>
          <p className="mb-5 text-gray-400 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsum explicabo atque nam, officiis facilis itaque bla. Mollitia ipsum explicabo atque nam.</p>
          <Button name="Entre em contato"/>
        </div>
        <Image src="/cta-professor.png" alt="." width={400} height={400} className="md:h-50 lg:h-80" />
      </div>

      <div className="flex flex-col-reverse mt-10 items-center md:mt-30 md:gap-20 md:flex-row">
        <div className="">
          <h2 className="text-3xl font-bold mb-5">Aprenda rápido com profissionais</h2>
          <p className="mb-5 text-gray-400 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsum explicabo atque nam, officiis facilis itaque bla. Mollitia ipsum explicabo atque nam.</p>
          <Button name="Comece a aprender" />
        </div>
        <Image src="/cta-learn.png" alt="." width={400} height={400} className="md:h-55 lg:h-100" />
      </div>

      <div className="flex flex-col-reverse items-center gap-1 mt-30 bg-gray-200 rounded-2xl lg:flex-row lg:gap-8 lg:items-start lg:pr-15">
        <div className="mx-15 my-10 lg:mr-0">
          <h2 className="text-3xl font-bold mb-5 text-gray-900">Comece a aprender e conquiste o emprego dos seus sonhos</h2>
          <p className="mb-5 text-gray-400 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsum explicabo atque nam, officiis facilis itaque bla. Mollitia ipsum explicabo atque nam.</p>
          <Button name="Comece a aprender" />
        </div>
        <Image src="/cta-starttolearn.png" alt="." width={400} height={300} className="h-40 w-70 lg:h-70 lg:w-140" />
      </div>


    </div>
  )
}