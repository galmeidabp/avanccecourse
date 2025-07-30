import { Button } from "../Button";

export function ContactForm () {
  return (
    <form action="submit" className="grid md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Primeiro nome*</label>
        <input className="border-1 border-gray-400 p-2 text-sm rounded transition-colors duration-300 outline-none focus:bg-neutral-700" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Sobrenome*</label>
        <input className="border-1 border-gray-400 p-2 text-sm rounded transition-colors duration-300 outline-none focus:bg-neutral-700" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Email*</label>
        <input className="border-1 border-gray-400 p-2 text-sm rounded transition-colors duration-300 outline-none focus:bg-neutral-700" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Especialista*</label>
        <input className="border-1 border-gray-400 p-2 text-sm rounded transition-colors duration-300 outline-none focus:bg-neutral-700" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Data*</label>
        <input className="border-1 border-gray-400 p-2 text-sm rounded transition-colors duration-300 outline-none focus:bg-neutral-700" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Hora*</label>
        <input className="border-1 border-gray-400 p-2 text-sm rounded transition-colors duration-300 outline-none focus:bg-neutral-700" type="text" />
      </div>

      <div className="mt-5">
        <Button name="Começar" />
      </div>
    </form>
  )
}