interface Props {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  label?: string
}

const Slider = ({ value, onChange, min, max, label }: Props) => {
  return (
    <div className="pl-2 w-2/3 flex items-center">
      {label && <label htmlFor="slider">{label}</label>}
      <input
        id="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="h-8 w-full"
      />
    </div>
  )
}

export default Slider
