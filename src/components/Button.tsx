interface ButtonProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export function Button({ name, size = 'lg' }: ButtonProps) {
  const sizeClasses = {
    sm: "px-2 py-1",
    md: "px-3 py-1.5",
    lg: "px-8 py-2",
  }
  return (
    <button className={`flex justify-center gap-3 bg-sky-600 rounded duration-300 hover:cursor-pointer transition-all ease-in-out  hover:ring-2 hover:ring-sky-300 hover:ring-offset-2 hover:ring-offset-neutral-900 hover:bg-transparent ${sizeClasses[size]}`}>
      {name}
    </button>
  )
}