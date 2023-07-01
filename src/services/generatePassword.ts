interface GeneratePasswordOptions {
  length: number
  includeLowercase: boolean
  includeUppercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberCharacters = '0123456789'
const symbolCharacters = '!@#$%^&*()_+'

export default function generatePassword({ length, includeLowercase, includeUppercase, includeNumbers, includeSymbols}: GeneratePasswordOptions) {
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

  return createPassword(characterList, length)
}

// TODO - This implementation does not guarantee that
// all character types will be included in the password
const createPassword = (characterList: string, length: number) => {
  let password = ''
  const characterListLength = characterList.length
  for (let i = 0; i < length; i++) {
    const characterIndex = Math.round(Math.random() * characterListLength)
    password += characterList.charAt(characterIndex)
  }
  return password
}
