interface ButtonProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export function Button({ name, size = 'md' }: ButtonProps) {
  const sizeClasses = {
    sm: "px-2 py-1",
    md: "px-3 py-1.5",
    lg: "px-8 py-2",
  }
  return (
    <button className={`flex justify-center gap-3 bg-sky-600 border-sky-700 rounded transition-colors duration-300 lg:px-8 lg:py-2 hover:cursor-pointer hover:bg-sky-800 ${sizeClasses[size]}`}>
      {name}
    </button>
  )
}