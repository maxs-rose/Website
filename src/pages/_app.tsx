import KeyboardInput from "@components/KeyboardInput";
import { githubLink, KeyboardContextType, linkedinLink } from "@constants/*";
import useKeybindings from "@hooks/useKeybindings";
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import React, { createContext, useState } from "react";

export const KeyboardContext = createContext<KeyboardContextType>({ add: (_, __) => false, remove: (_) => false});

const bindingMap = new Map<string, () => void>();

const GlobalKeybindings: React.FC = () => {
  useKeybindings("git", () => window.open(githubLink, "_blank"));
  useKeybindings("in", () => window.open(linkedinLink, "_blank"));

  return <></>;
}

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

  return (
      <KeyboardContext.Provider value={{ add: addBinding, remove: removeBinding }}>
        <GlobalKeybindings />
        <KeyboardInput keybindings={bindings} />
        <Component {...pageProps} />
      </KeyboardContext.Provider>
  )
}

export default MyApp;
