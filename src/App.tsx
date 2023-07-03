import { useEffect, useState } from "react"
import { BiCopy, BiRefresh } from "react-icons/bi"

import Checkbox from "./components/common/Checkbox"
import Button from "./components/common/Button"
import Slider from "./components/common/Slider"
import InputNumber from "./components/common/InputNumber"
import InputText from "./components/common/InputText"
import Alert from "./components/common/Alert"

import generatePassword from "./services/generatePassword"

function App() {
  const [length, setLength] = useState(12)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [showAlert, setShowAlert] = useState(false)

  const refreshPassword = () => {
    const password = generatePassword({ length, includeLowercase, includeUppercase, includeNumbers, includeSymbols })
    setPassword(password)

    if (history.length >= 5) {
      setHistory(history.slice(1))
    }
    setHistory([...history, password])
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 1000)
  }

  useEffect(() => {
    refreshPassword()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, includeLowercase, includeUppercase, includeNumbers, includeSymbols])

  return (
    <div className="w-screen h-screen flex flex-col justify-center lg:justify-center items-center bg-slate-300 align-middle">
      {showAlert && <Alert label={'Copied'} />}
      <div>
        <div className="pt-4 flex flex-col sm:flex-row">
          <InputText value={password} onInput={setPassword} />
          <div className="flex items-center pl-2">
            <BiCopy onClick={() => copyToClipboard()} size={28} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <BiRefresh onClick={() => refreshPassword()} size={32} className="text-gray-500 hover:text-gray-700 cursor-pointer ml-2" />
          </div>
        </div>
        <div className="w-full flex justify-between pt-4">
          <div>
            <Checkbox isChecked={includeLowercase} toggleIsChecked={setIncludeLowercase} label="Lowercase" />
            <Checkbox isChecked={includeUppercase} toggleIsChecked={setIncludeUppercase} label="Uppercase" />
          </div>
          <div>
            <Checkbox isChecked={includeNumbers} toggleIsChecked={setIncludeNumbers} label="Numbers" />
            <Checkbox isChecked={includeSymbols} toggleIsChecked={setIncludeSymbols} label="Symbols" />
          </div>
        </div>
        <div className="flex flex-col pt-2 w-full">
          <p>Password Length:</p>
          <div className="flex items-center pt-2">
            <InputNumber value={length} onInput={setLength} min={1} max={32} />
            <Slider value={length} onChange={setLength} min={1} max={32} />
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <Button handleClick={() => refreshPassword()} label="Generate Password" />
        </div>
      </div>
    </div>
  )
}

export default App
