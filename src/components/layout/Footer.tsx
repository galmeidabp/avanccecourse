import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-gray-800 p-10 mt-35">
      <div className="max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
        <div className="flex flex-col items-center justify-between border-b-1 border-gray-700 pb-8 mb-8 md:flex-row">
          <div className="flex lg:gap-2">
            <p className="font-black text-blue-500 text-3xl">L</p>
            <h1 className="block text-3xl md:hidden lg:block">LOGO</h1>
          </div>


          <form className="flex flex-col gap-3 items-center md:flex-row">
            <p className="font-semibold">Assine nossa newsletter</p>
            <div className="flex items-center gap-3">
              <input type="text" placeholder="Digite seu e-mail" className="bg-blue-800 p-2 rounded-lg outline-none focus:bg-blue-900" />
              <button type="submit" className="p-2 bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900"><Send /></button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-10 pb-8 mb-4 md:flex-row lg:justify-center lg:gap-20">
          <div className="flex justify-between md:gap-10 lg:gap-20">
            <div>
              <p className="mb-3 font-semibold">Explore</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li>Sobre</li>
                <li>Preços</li>
                <li>Blog</li>
                <li>Vagas</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">Explore</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li>Pagamentos online</li>
                <li>Projeções financeiras</li>
                <li>Escrituração</li>
                <li>Bancos</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between md:gap-10 lg:gap-20">
            <div>
              <p className="mb-3 font-semibold">Recursos</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li>Documentação</li>
                <li>Integração</li>
                <li>API Reference</li>
                <li>Suporte</li>
                <li>Ajuda</li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">Plataforma</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li>Infraestrutura</li>
                <li>Certificados</li>
                <li>Licensas</li>
                <li>Termos e condições</li>
                <li>Jurídico</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start border-b-1 border-gray-700 pb-8 mb-8 lg:flex-row lg:justify-center lg:gap-20">
          <div>
            <div className="flex items-center gap-2 mb-5 text-gray-400">
              <MapPin />
              <p>Endereço, Rua Tal Tal Tal, 876 - Brasil</p>
            </div>
            <div className="flex items-center gap-2 mb-5 text-gray-400">
              <Phone />
              <p>Endereço, Rua Tal Tal Tal, 876 - Brasil</p>
            </div>
            <div className="flex items-center gap-2 mb-8 text-gray-400">
              <Mail />
              <p>Endereço, Rua Tal Tal Tal, 876 - Brasil</p>
            </div>
          </div>


          <div>
            <p className="font-semibold">Nossas redes</p>
            <div className="flex gap-5 mt-5 text-gray-400">
              <Facebook className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
              <Linkedin className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center text-gray-400 text-sm lg:flex-row lg:gap-0 lg:justify-between">
          <p>©Copyright 2025 by S.</p>
          <p>Privacidade - Cookies - Termos e Condições</p>
          <div className="flex gap-5">
            <Image src="/black-applestore.png" alt="." width={100} height={100} />
            <Image src="/black-googleplay.png" alt="." width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  )
}