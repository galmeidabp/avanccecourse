import { ArrowBigUpDash } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center lg:gap-3" href="/">
      <ArrowBigUpDash className="h-8 w-8 text-sky-600" />
      <h1 className="hidden lg:block lg:text-3xl">Avancce</h1>
    </Link>
  )
}