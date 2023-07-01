interface Props {
  handleClick: () => void
  label: string
}

const Button = ({ handleClick, label }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-64 h-10"
    >
      {label}
    </button>
  )
}

export default Button