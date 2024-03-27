interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <button
      type="button"
      className="rounded-full bg-white-100 px-8 py-1 transition-colors duration-200 hover:bg-orange-500 hover:text-white-100"
    >
      {title}
    </button>
  )
}
