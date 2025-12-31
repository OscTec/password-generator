interface Props {
    id: string;
    isChecked: boolean;
    toggleIsChecked: (includeLowercase: boolean) => void;
    label: string;
}

const Checkbox = ({ id, isChecked, toggleIsChecked, label }: Props) => {
    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleIsChecked(!isChecked)}
                className="ml-2 h-4 w-4"
            />
            <label htmlFor={id} className="pl-2">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
