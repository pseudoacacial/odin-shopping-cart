import { useState, useEffect } from 'react'

export const DarkMode = () => {
  // const [browserDarkMode, setBrowserDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [darkMode, setDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

  //listen for changes of preferred light/dark mode
  // useEffect(()=>{
  //   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { setBrowserDarkMode(e.matches)})
  // }, [])

  useEffect(()=>{
    if(darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
    
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }



  return (
    <button onClick={toggleDarkMode} className='cursor-pointer border-slate-800 dark:border-rose-100 border-2 rounded-full w-12 relative'>
      <div className='rounded-full bg-slate-800 dark:bg-rose-100 size-5 border-slate-80 top-half absolute transition-all duration-500 -translate-x-1/2 -translate-y-1/2 left-1/4 dark:left-3/4'></div>
    </button>
  )
}
