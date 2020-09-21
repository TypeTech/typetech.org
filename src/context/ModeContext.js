import React, { useEffect, useState } from "react"

export const ModeContext = React.createContext()

const ModeProvider = props => {
  const [mode, setMode] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode))
  }, [mode])

  function initialState() {
    const inStorage = "mode" in localStorage
    const savedMode = JSON.parse(localStorage.getItem("mode"))
    const userPreference = getColorScheme()
    const value = inStorage ? savedMode : userPreference ? true : false
    return value
  }

  function getColorScheme() {
    if (!window.matchMedia) return
    return window.matchMedia("(prefers-color-scheme:dark)").matches
  }
  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
