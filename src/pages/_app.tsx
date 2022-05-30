import KeyboardInput from "@components/KeyboardInput";
import { githubLink, linkedinLink } from "@constants/*";
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useEffect, useState } from "react";

export type KeyboardContextType = { add: (key: string, callback: () => void) => void, remove: (key: string) => boolean }
export const KeyboardContext = createContext<KeyboardContextType>({ add: (_, __) => false, remove: (_) => false});

const bindingMap = new Map<string, () => void>();

function MyApp({ Component, pageProps }: AppProps) {
  const [bindings, setBindings] = useState(new Map<string, () => void>());

  const addBinding = (key: string, callback: () => void) => {
    const lowerCaseKey = key.toLowerCase();

    bindingMap.set(lowerCaseKey, callback);

    setBindings(bindingMap);
  }

  const removeBinding = (key: string) => {
    const lowerCaseKey = key.toLowerCase();

    const deleted = bindingMap.delete(lowerCaseKey);

    setBindings(bindingMap);

    return deleted;
  }

  useEffect(() => {
    addBinding("git", () => window.open(githubLink, "_blank"))
    addBinding("in", () => window.open(linkedinLink, "_blank"))
  }, [])

  return (
      <KeyboardContext.Provider value={{ add: addBinding, remove: removeBinding }}>
        <KeyboardInput keybindings={bindings}></KeyboardInput>
        <Component {...pageProps} />
      </KeyboardContext.Provider>
  )
}

export default MyApp
