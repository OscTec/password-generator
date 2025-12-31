interface Props {
    id: string;
    value: string;
    onInput: (value: string) => void;
    label?: string;
}

const InputText = ({ id, value, onInput, label }: Props) => {
    return (
        <div>
            {label && (
                <label htmlFor={id} className="pr-2">
                    {label}
                </label>
            )}
            <input
                id={id}
                type="text"
                value={value}
                onChange={(e) => onInput(e.target.value)}
                className="border-base-content border-opacity-0 bg-base-100 rounded-btn rounded border p-1 text-xl"
            />
        </div>
    );
};

export default InputText;
