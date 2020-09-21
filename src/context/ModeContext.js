import React, { useEffect, useState } from "react"

export const ModeContext = React.createContext()

const ModeProvider = props => {
  const [mode, setMode] = useState(initialState)

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mode", JSON.stringify(mode))
    }
  }, [mode])

  function initialState() {
    let inStorage = false
    let savedMode = false
    const userPreference = getColorScheme();
    if (typeof localStorage !== "undefined") {
      inStorage = "mode" in localStorage
    }
    if (typeof localStorage !== "undefined") {
      savedMode = JSON.parse(localStorage.getItem("mode"))
    }
    if (inStorage) {
      return savedMode
    } else if (userPreference) {
      return true;
    } else {
      return false;
    }
  }

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
