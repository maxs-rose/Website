import KeyboardInput from "@components/KeyboardInput";
import { githubLink, KeyboardContextType, linkedinLink } from "@constants/*";
import useKeybindings from "@hooks/useKeybindings";
import '@styles/globals.css'
import { AckeeInstance } from "ackee-tracker";
import type { AppProps } from 'next/app'
import { Router } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import * as ackeeTracker from 'ackee-tracker'

export const KeyboardContext = createContext<KeyboardContextType>({ add: (_, __) => false, remove: (_) => false});

const bindingMap = new Map<string, () => void>();

const GlobalKeybindings: React.FC = () => {
  useKeybindings("git", () => window.open(githubLink, "_blank"));
  useKeybindings("in", () => window.open(linkedinLink, "_blank"));

  return <></>;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [bindings, setBindings] = useState(new Map<string, () => void>());

  useEffect(() => {
      if(typeof window !== "undefined") {
          const w = window as {ackeeTrackerInstance? : AckeeInstance}

          if(!w.ackeeTrackerInstance) {
              w.ackeeTrackerInstance = ackeeTracker.create("https://ackee.max-rose.com")

              w.ackeeTrackerInstance.record("e524de48-5339-4ecd-863d-870db1c004f3");

              Router.events.on('routeChangeComplete', () => w.ackeeTrackerInstance?.record("e524de48-5339-4ecd-863d-870db1c004f3"))
          }
      }
  }, [])

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
