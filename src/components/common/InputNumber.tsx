interface Props {
  value: number
  onInput: (value: number) => void
  min: number
  max: number
  label?: string
}

const InputNumber = ({ value, onInput, min, max, label }: Props) => {
  return (
    <div>
      {label && <label htmlFor="inputNumber">{label}</label>}
      <input
        id="inputNumber"
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onInput(parseInt(e.target.value))}
        className="ml-2 w-12 h-8 rounded"
      />
    </div>
  )
}

export default InputNumber
