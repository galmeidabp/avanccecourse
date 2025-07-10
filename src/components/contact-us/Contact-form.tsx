export function ContactForm () {
  return (
    <form action="submit" className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Primeiro nome*</label>
        <input className="bg-gray-200 rounded-md p-3" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Sobrenome*</label>
        <input className="bg-gray-200 rounded-md p-3" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Email*</label>
        <input className="bg-gray-200 rounded-md p-3" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Especialista*</label>
        <input className="bg-gray-200 rounded-md p-3" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Data*</label>
        <input className="bg-gray-200 rounded-md p-3" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-gray-300" htmlFor="text">Hora*</label>
        <input className="bg-gray-200 rounded-md p-3" type="text" />
      </div>

      <button className="flex gap-3 bg-blue-500 px-3 py-1.5 rounded-lg lg:px-8 lg:py-2 hover:cursor-pointer hover:bg-blue-600">Começar </button>
    </form>
  )
}