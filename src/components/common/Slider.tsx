interface Props {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  label?: string
}

const Slider = ({ value, onChange, min, max, label }: Props) => {
  return (
    <div>
      {label && <label htmlFor="slider">{label}</label>}
      <input
        id="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="ml-2 w-12 h-8"
      />
    </div>
  )
}

export default Slider
