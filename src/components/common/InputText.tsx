interface Props {
  value: string
  onInput: (value: string) => void
  label?: string
}

const InputText = ({ value, onInput, label }: Props) => {
  return (
    <div>
      {label && <label htmlFor="inputText" className="pr-2">{label}</label>}
      <input
        id="inputText"
        type="text"
        value={value}
        onChange={(e) => onInput(e.target.value)}
        className="border border-base-content border-opacity-0 bg-base-100 rounded-btn p-1 rounded text-xl"
      />
    </div>
  )
}

export default InputText
