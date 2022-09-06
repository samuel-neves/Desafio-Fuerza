const handleChangeValue = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setValueFunction: React.Dispatch<React.SetStateAction<string>>,
  setErrorFunction?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setValueFunction(e.target.value);
  setErrorFunction && setErrorFunction(false);
}

export {
  handleChangeValue,
}
