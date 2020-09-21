import React, { useEffect, useState } from "react"

export const ModeContext = React.createContext()

const ModeProvider = props => {
  const [mode, setMode] = useState(initialState())

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mode", JSON.stringify(mode))
    }
  }, [mode])

  function initialState() {
    const userPreference = getColorScheme()
    let inStorage;
    let savedMode;
    if (typeof window!=="undefined") { 
      inStorage = "mode" in localStorage
      savedMode = JSON.parse(localStorage.getItem("mode"))
    }
    if (inStorage) {
      return savedMode
    } else if (userPreference) {
      return true
    } else {
      return false
    }
  }
  useEffect(() => {
    initialState()
  }, [])

  function getColorScheme() {
    if (typeof window !== "undefined") {
      if (!window.matchMedia) return
      return window.matchMedia("(prefers-color-scheme:dark)").matches
    }
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
