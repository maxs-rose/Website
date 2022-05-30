import React, { useCallback, useEffect, useRef, useState } from "react";

const KeyboardInput: React.FC<{ keybindings: Map<string, () => void> }> = ({keybindings}) => {

	const [displayKeys, setDisplayKeys] = useState("");
	const inputKeys = useRef("");

	const processKeypress = useCallback(({ key }: KeyboardEvent) => {
		if(key === "Escape") {
			inputKeys.current = "";
			setDisplayKeys(inputKeys.current);
		}
		else if(key === "Backspace" && inputKeys.current.length >= 1) {
			inputKeys.current = inputKeys.current.slice(0, -1);
			setDisplayKeys(inputKeys.current);
		}
		else if(key.length > 1)
			return;
		else if(inputKeys.current.length >= 1 || key === ":" ) {
			inputKeys.current += key;
			setDisplayKeys(inputKeys.current);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("keydown", processKeypress);

		return () => {
			window.removeEventListener("keydown", processKeypress)
		}
	}, [processKeypress]);
	
	useEffect(() => {
		const keys = displayKeys.replace(":", "").toLowerCase();
		if(keybindings.has(keys)) {
			inputKeys.current = "";
			setDisplayKeys(inputKeys.current);
			keybindings.get(keys)!.apply(null);
		}
	}, [displayKeys, keybindings])

	return <div className="fixed w-full bg-background">{displayKeys}</div>
}

export default KeyboardInput;