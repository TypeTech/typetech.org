import React from "react"
import useLocalStorage from '../hooks/useLocalStorage'

export const ModeContext = React.createContext()

const ModeProvider = props => {
  const [mode, setMode] = useLocalStorage('modex',false)

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
