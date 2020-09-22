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
    let inStorage
    let savedMode
    if (typeof window !== "undefined") {
      inStorage = "mode" in localStorage
      savedMode = JSON.parse(localStorage.getItem("mode"))
    }
    return inStorage ? savedMode : false
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
