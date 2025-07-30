import { LucideIcon } from "lucide-react";

type CategoriesProps = {
  title: string;
  Icon: LucideIcon;
  iconColor: string;
  bgColor: string;
  cardBg?: string;
  textCard?: string;
}

export function CategoriesCard({title, Icon, iconColor, bgColor, cardBg, textCard}: CategoriesProps) { 
  return (
    <div className={`rounded-lg px-5 py-8 max-w-3xs flex flex-col ${cardBg} ${textCard}`}>
      <div className={`${bgColor} rounded-lg flex items-center justify-center w-10 h-10`}>
        <Icon className={iconColor} />
      </div>
      <p className="mt-5 font-bold text-xl whitespace-pre-line">{title}</p>
      <span className="text-sm mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  )
}