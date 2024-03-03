import Select from 'react-select';
import { languages } from '../lib/languages'; // Alterado de .ts para apenas .ts

export default function SelectGroup({ onChange }: { onChange: (value: any) => void }) { // Tipando explicitamente o parâmetro onChange
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: 300,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#2648ff' : 'white',
      color: state.isSelected ? 'black' : state.isFocused ? 'white' : 'black', // Mantendo duas configurações de cor para a propriedade color
      '&:hover': {
        backgroundColor: '#2648ff',
        color: 'white'
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'black',
    })
  };

  return <Select options={languages} styles={customStyles} onChange={onChange}/>;
}

