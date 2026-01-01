import { useState } from 'react';
import { BiCopy, BiRefresh } from 'react-icons/bi';
import Alert from './components/common/Alert';
import Button from './components/common/Button';
import Checkbox from './components/common/Checkbox';
import InputNumber from './components/common/InputNumber';
import InputText from './components/common/InputText';
import Slider from './components/common/Slider';
import usePassword from './hooks/usePassword';

function App() {
    const [length, setLength] = useState(12);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    const { password, setPassword, regeneratePassword } = usePassword({
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols,
    });

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 1000);
    };

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-300 align-middle lg:justify-center">
            {showAlert && <Alert label={'Copied'} />}
            <div>
                <div className="flex flex-col pt-4 sm:flex-row">
                    <InputText
                        id="password"
                        value={password}
                        onInput={setPassword}
                    />
                    <div className="mt-2 flex items-center pl-2">
                        <BiCopy
                            onClick={() => copyToClipboard()}
                            size={28}
                            className="cursor-pointer text-gray-500 hover:text-gray-700"
                        />
                        <BiRefresh
                            onClick={() => regeneratePassword()}
                            size={32}
                            className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-between pt-4">
                    <div>
                        <Checkbox
                            id="lowercase"
                            isChecked={includeLowercase}
                            toggleIsChecked={setIncludeLowercase}
                            label="Lowercase"
                        />
                        <Checkbox
                            id="uppercase"
                            isChecked={includeUppercase}
                            toggleIsChecked={setIncludeUppercase}
                            label="Uppercase"
                        />
                    </div>
                    <div>
                        <Checkbox
                            id="numbers"
                            isChecked={includeNumbers}
                            toggleIsChecked={setIncludeNumbers}
                            label="Numbers"
                        />
                        <Checkbox
                            id="symbols"
                            isChecked={includeSymbols}
                            toggleIsChecked={setIncludeSymbols}
                            label="Symbols"
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col pt-2">
                    <p>Password Length:</p>
                    <div className="flex items-center pt-2">
                        <InputNumber
                            id="password-length"
                            value={length}
                            onInput={setLength}
                            min={1}
                            max={32}
                        />
                        <Slider
                            value={length}
                            onChange={setLength}
                            min={1}
                            max={32}
                        />
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <Button
                        handleClick={() => regeneratePassword()}
                        label="Generate Password"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
