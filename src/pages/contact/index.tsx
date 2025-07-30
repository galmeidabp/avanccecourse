import { ContactForm } from "@/components/contact-us/Contact-form";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, HandHelping, Mails, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex px-4 flex-col mt-30 mb-35 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
      
      <div data-aos="fade-down" className="flex flex-row justify-between items-center gap-3 mb-15">
        <h1 className="text-3xl font-bold">Nos contate</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-white" href="/contact">Contato</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div data-aos="fade-down" className="flex flex-col gap-10 md:flex-row">

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="bg-blue-200 w-15 h-10 flex items-center justify-center rounded-full"><Mails className="text-blue-500" /></div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold">MANDE UM EMAIL</p>
            <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
            <Link className="text-blue-500 flex gap-3 cursor-pointer" href='#'>Nos contate<ChevronRight /> </Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="bg-blue-200 w-15 h-10 flex items-center justify-center rounded-full"><HandHelping className="text-blue-500" /></div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold">VAGAS</p>
            <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
            <Link className="text-blue-500 flex gap-3 cursor-pointer" href='#'>Nos contate <ChevronRight /> </Link>
          </div>
        </div>

      </div>

      <Image data-aos="fade-down" src="/map.png" alt="Mapa" height={900} width={900} className="mt-20 md:mt-30 m-auto" />

      <div data-aos="fade-down" className="flex flex-col mt-30 gap-20 items-center lg:flex-row">
        <div>
          <h2 className="text-3xl font-semibold mb-8">Participe de uma consultoria online</h2>
          <ContactForm />
        </div>
        <Image src="/contact-img.png" alt="Imagem de contato" height={300} width={400} className="hidden lg:block" />
      </div>

    </div>
  )
}