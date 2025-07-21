import { Button } from "../Button";

export function ContactForm () {
  return (
    <form action="submit" className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Primeiro nome*</label>
        <input className="bg-gray-200 rounded py-2 px-8" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Sobrenome*</label>
        <input className="bg-gray-200 rounded py-2 px-8" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Email*</label>
        <input className="bg-gray-200 rounded py-2 px-8" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Especialista*</label>
        <input className="bg-gray-200 rounded py-2 px-8" type="text" />
      </div>

      <div className="flex flex-col gap-3 mb-10">
        <label className="text-gray-300" htmlFor="text">Data*</label>
        <input className="bg-gray-200 rounded py-2 px-8" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Hora*</label>
        <input className="bg-gray-200 rounded py-2 px-8" type="text" />
      </div>

      <Button name="Começar" />
    </form>
  )
}