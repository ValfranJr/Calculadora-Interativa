
import { useEffect, useState } from 'react'
import './App.css'
import Buttons from './components/Buttons.jsx'
import Display from './components/Display.jsx'

function App() {
  const [value, setValue] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const onClickButton = (botao) => {
    if (botao === '=') {
      setValue(eval(value))
    } else {
      setValue(value + botao)
    }
    if (botao === 'AC') {
    setValue('');
  } else if (botao === '←') {
    setValue(value.slice(0, -1));
    }
    if (botao === '%') {
      setValue((eval(value) / 100).toString());
      }
  }
  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      console.log('modo escuro?', darkMode);
      console.log('classes do html:', document.documentElement.classList);

    }
  }, [darkMode]);


  return (
  <div className={`min-h-screen flex flex-col items-center justify-center transition-all ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
    <div className={`p-6 rounded shadow-md w-full max-w-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className={`text-3xl text-center font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Calculadora Interativa</h1>
        <Display value={value} />
        <Buttons onClickButton={onClickButton} />
        <div className="flex justify-center mt-4">
        <button className={`text-sm px-4 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        onClick={() => setDarkMode(!darkMode)}
        >
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
        </button>
        </div>
    </div>
  </div>
  );
}

export default App
