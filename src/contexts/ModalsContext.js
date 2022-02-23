import { createContext } from "react";

export default createContext({
  captureLead: {
    interest: '',
    visible: false,
    close: () => undefined,
    open: () => undefined
  }
})
