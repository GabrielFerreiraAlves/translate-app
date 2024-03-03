import { useState, useRef } from 'react';
import SelectGroup from './Select';
import type { Language } from '../lib/types';

export default function Layout() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const text = useRef<HTMLTextAreaElement>();
  const [translatedText, setTranslatedText] = useState('');
  const baseUrl: string = import.meta.env.VITE_API_URL;
  const key: string = import.meta.env.VITE_API_KEY;

  const onHandleChangeFrom = (selectedOption: Language) => setFrom(selectedOption.value);
  const onHandleChangeTo = (selectedOption: Language) => setTo(selectedOption.value);

  const onHandleTextChange = () => {
    if (!from) alert('Selecione um idioma de origem');
    if (!to) alert('Selecione um idioma para a tradução');

    if (text.current && from && to) {
      setTimeout(() => {
        const url = `${baseUrl}q=${text.current.value}&langpair=${from}|${to}&key=${key}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setTranslatedText(data.responseData.translatedText));
      }, 1200);
    }
  };

  return (
    <div className='block justify-center items-center gap-[15px] sm:flex'>
      <div>
        <SelectGroup onChange={onHandleChangeFrom}/>
        <textarea 
          className="mt-[15px] resize-none border rounded-md p-2 w-full h-40 focus:outline-none focus:ring focus:ring-[#2648ff]" 
          placeholder="Digite aqui..." 
          ref={text}
          onChange={onHandleTextChange}
        ></textarea>
      </div>
      <div>
        <SelectGroup onChange={onHandleChangeTo}/>
        <textarea 
          className="mt-[15px] resize-none border rounded-md p-2 w-full h-40 focus:outline-none focus:ring focus:ring-[#2648ff]"
          value={translatedText}
        ></textarea>
      </div>
    </div>
  );
}

