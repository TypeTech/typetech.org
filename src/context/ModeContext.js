import React, { useState } from "react"

export const ModeContext = React.createContext()

const ModeProvider = props => {
  const [mode, setMode] = useState(false)

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
