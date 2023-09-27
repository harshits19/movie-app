export const validateEmail = (text, setEmailError) => {
  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
  let result = regex.test(text)
  result ? setEmailError(false) : setEmailError(true)
}
export const validatePassword = (text, setPassError) => {
  let regex = /^[a-zA-Z0-9-!@#$%^&*]{4,}$/
  let result = regex.test(text)
  result ? setPassError(false) : setPassError(true)
}
