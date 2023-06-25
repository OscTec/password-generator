import { useState } from "react"

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
    <>
      <div className="card">
        <div onClick={() => navigator.clipboard.writeText(password)}>
          <p>Password: {password}</p>
        </div>
        <div>
          <input id="default-checkbox" type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="w-4 h-4" />
          <label htmlFor="default-checkbox">Lowercase</label>
        </div>
        <div>
          <input id="default-checkbox" type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="w-4 h-4" />
          <label htmlFor="default-checkbox">Uppercase</label>
        </div>
        <div>
          <input id="default-checkbox" type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="w-4 h-4" />
          <label htmlFor="default-checkbox">Numbers</label>
        </div>
        <div>
          <input id="default-checkbox" type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="w-4 h-4" />
          <label htmlFor="default-checkbox">Symbols</label>
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <input id="length" type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="ml-2 w-12 h-8" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleGeneratePassword()}>
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
