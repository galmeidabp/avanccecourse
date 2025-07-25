import { Button } from "../Button";
import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="flex justify-between items-center py-5 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
      <Logo />

      <ul className="flex gap-3 text-gray-400 md:gap-8 lg:gap-10">
        <li className="hover:cursor-pointer hover:text-sky-600"><Link href="/">Home</Link></li>
        <li className="hover:cursor-pointer hover:text-sky-600"><Link prefetch={false} href="/courses">Cursos</Link></li>
        <li className="hover:cursor-pointer hover:text-sky-600"><Link prefetch={false} href="/blog">Blog</Link></li>
        <li className="hover:cursor-pointer hover:text-sky-600"><Link href="/contact">Contato</Link></li>
      </ul>

      <Button name="Saber Mais" />
    </div>
  )
}