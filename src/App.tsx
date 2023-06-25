import { useState } from "react"
import Checkbox from "./components/common/Checkbox"
import Button from "./components/common/Button"
import Slider from "./components/common/Slider"
import InputNumber from "./components/common/InputNumber"

function App() {
  const [length, setLength] = useState(12)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')

  const handleGeneratePassword = () => {
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberCharacters = '0123456789'
    const symbolCharacters = '!@#$%^&*()_+'

    let characterList = ''
    if (includeLowercase) {
      characterList += lowercaseCharacters
    }
    if (includeUppercase) {
      characterList += uppercaseCharacters
    }
    if (includeNumbers) {
      characterList += numberCharacters
    }
    if (includeSymbols) {
      characterList += symbolCharacters
    }

    setPassword(createPassword(characterList))
  }

  // TODO - This implementation does not guarantee that
  // all character types will be included in the password
  const createPassword = (characterList: string) => {
    let password = ''
    const characterListLength = characterList.length
    for (let i = 0; i < length; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password += characterList.charAt(characterIndex)
    }
    return password
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-red-300">
      <div className="h-1/2 w-1/2 bg-orange-400">
        <div onClick={() => navigator.clipboard.writeText(password)}>
          <p>Password: {password}</p>
        </div>
        <Checkbox isChecked={includeLowercase} toggleIsChecked={setIncludeLowercase} label="Lowercase" />
        <Checkbox isChecked={includeUppercase} toggleIsChecked={setIncludeUppercase} label="Uppercase" />
        <Checkbox isChecked={includeNumbers} toggleIsChecked={setIncludeNumbers} label="Numbers" />
        <Checkbox isChecked={includeSymbols} toggleIsChecked={setIncludeSymbols} label="Symbols" />
        <Slider value={length} onChange={setLength} min={1} max={32} />
        <InputNumber value={length} onInput={setLength} min={1} max={32} label="Length" />
        <Button handleClick={() => handleGeneratePassword()} label="Generate Password" />
      </div>
    </div>
  )
}

export default App
