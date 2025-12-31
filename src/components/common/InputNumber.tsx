interface Props {
    id: string;
    value: number;
    onInput: (value: number) => void;
    min: number;
    max: number;
    label?: string;
}

const InputNumber = ({ id, value, onInput, min, max, label }: Props) => {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onInput(parseInt(e.target.value))}
                className="ml-2 h-8 w-12 rounded"
            />
        </div>
    );
};

export default InputNumber;
