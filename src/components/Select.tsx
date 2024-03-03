import Select from 'react-select'
import { languages } from '../lib/languages.ts'

export default function SelectGroup({ onChange }) {
    const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 300, // Defina a largura desejada aqui
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#2648ff' : 'white',
      color: state.isSelected ? 'black' : 'black',
      color: state.isFocused ? 'white' : 'black',
      '&:hover': {
        backgroundColor: '#2648ff',
        color: 'white'
      },
    }),
    // Estilo das opções selecionadas
    singleValue: (provided) => ({
      ...provided,
      color: 'black', // Cor do texto da opção selecionada
    })
  }

  return <Select options={languages} styles={customStyles} onChange={onChange}/>
  
}
