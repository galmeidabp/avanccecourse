import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className="bg-neutral-800 p-10 px-4">
      <div className="max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
        <div className="flex flex-col items-center justify-between border-b-1 border-gray-700 pb-8 mb-8 md:flex-row">
          <Logo />

          <form className="flex flex-col gap-3 items-center md:flex-row">
            <p className="font-semibold">Assine nossa newsletter</p>
            <div className="flex items-center gap-3">
              <input type="text" placeholder="Digite seu e-mail" className="bg-sky-600 transition-colors duration-300 p-2 rounded outline-none focus:bg-sky-800" />
              <button type="submit" className="p-2 bg-sky-600 rounded cursor-pointer hover:bg-sky-800"><Send /></button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center mb-10 lg:flex-row lg:gap-25">
          <div className="grid grid-cols-2 m-auto gap-10 mb-8 md:grid-cols-4 lg:gap-20">
            <div>
              <p className="mb-3 font-semibold">Explore</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li><Link className="hover:text-sky-600" href="#">Sobre</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Preços</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Blog</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Vagas</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Contato</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">Recurso</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li><Link className="hover:text-sky-600" href="#">Aulas online</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Certificados</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Suporte</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Material</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Fórum</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">Benefícios</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li><Link className="hover:text-sky-600" href="#">Monitoria</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Atualização</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Garantia</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Vagas</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Contato</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">Plataforma</p>
              <ul className="text-gray-400 flex flex-col gap-2">
                <li><Link className="hover:text-sky-600" href="#">Cursos</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Zoom</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Área do aluno</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Termos de uso</Link></li>
                <li><Link className="hover:text-sky-600" href="#">Política de privacidade</Link></li>
              </ul>
            </div>

          </div>

          
        </div>

        <div className="flex flex-col gap-4 mt-10 justify-center items-center md:flex-row lg:gap-20 md:items-start mb-8 pb-8 border-b-1 border-gray-700">
          <div>
            <div className="flex items-center gap-2 mb-5 text-gray-400">
              <MapPin />
              <p>Rua das Dores, 733 - PE, Brasil</p>
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
              <Facebook className="cursor-pointer hover:text-sky-600" />
              <Twitter className="cursor-pointer hover:text-sky-600" />
              <Linkedin className="cursor-pointer hover:text-sky-600" />
            </div>
          </div>
        </div>



        <div className="flex flex-col gap-3 items-center text-gray-400 text-sm lg:flex-row lg:gap-0 lg:justify-between">
          <p>©Copyright 2025 by Avancce.</p>
          <p>Privacidade - Cookies - Termos e Condições</p>
          <div className="flex gap-5">
            <Image src="/black-applestore.png" alt="Apple Store" width={100} height={100} />
            <Image src="/black-googleplay.png" alt="Google Play" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  )
}