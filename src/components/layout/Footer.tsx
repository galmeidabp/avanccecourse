import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className="bg-gray-800 p-10">
      <div className="max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
        <div className="flex flex-col items-center justify-between border-b-1 border-gray-700 pb-8 mb-8 md:flex-row">
          <Logo />

          <form className="flex flex-col gap-3 items-center md:flex-row">
            <p className="font-semibold">Assine nossa newsletter</p>
            <div className="flex items-center gap-3">
              <input type="text" placeholder="Digite seu e-mail" className="bg-blue-500 p-2 rounded outline-none focus:bg-blue-600" />
              <button type="submit" className="p-2 bg-blue-500 rounded cursor-pointer hover:bg-blue-600"><Send /></button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center border-b-1 border-gray-700 mb-10 lg:flex-row lg:gap-25">
          <div className="flex gap-10 pb-8 mb-4 justify-center lg:gap-20">
            <div>
              <p className="mb-3 font-semibold">Explore</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li><Link className="hover:text-blue-500" href="#">Sobre</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Preços</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Blog</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Vagas</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Contato</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">Recurso</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li><Link className="hover:text-blue-500" href="#">Sobre</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Preços</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Blog</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Vagas</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Contato</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">Benefícios</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li><Link className="hover:text-blue-500" href="#">Sobre</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Preços</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Blog</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Vagas</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Contato</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">Plataforma</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li><Link className="hover:text-blue-500" href="#">Sobre</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Preços</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Blog</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Vagas</Link></li>
                <li><Link className="hover:text-blue-500" href="#">Contato</Link></li>
              </ul>
            </div>

          </div>

          <div className="flex gap-20 justify-between items-center lg:items-start pb-8 mb-8 lg:justify-center">
            <div>
              <div className="flex items-center gap-2 mb-5 text-gray-400">
                <MapPin />
                <p>Endereço, Rua Tal Tal Tal, 876 - Brasil</p>
              </div>
              <div className="flex items-center gap-2 mb-5 text-gray-400">
                <Phone />
                <p>11 1234 5678</p>
              </div>
              <div className="flex items-center gap-2 mb-8 text-gray-400">
                <Mail />
                <p>emailavancce@email.com</p>
              </div>
            </div>

            <div>
              <p className="font-semibold">Nossas redes</p>
              <div className="flex gap-5 mt-5 text-gray-400">
                <Facebook className="cursor-pointer hover:text-blue-500" />
                <Twitter className="cursor-pointer hover:text-blue-500" />
                <Linkedin className="cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center text-gray-400 text-sm lg:flex-row lg:gap-0 lg:justify-between">
          <p>©Copyright 2025 by L.</p>
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