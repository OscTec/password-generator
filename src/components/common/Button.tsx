interface Props {
  handleClick: () => void
  label: string
}

const Button = ({ handleClick, label }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="w-16 md:w-32 lg:w-48 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  )
}

export default Button
