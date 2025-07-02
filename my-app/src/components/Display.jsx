import { useEffect, useState } from 'react'



function Display({ value, darkMode }) {
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    setDisplay(value)
  }, [value])

  return (
    <div className={`text-3xl text-center font-bold mb-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}>
      {display}
    </div>
  )
}

export default Display