import React, { useCallback, useEffect, useRef, useState } from "react";

const KeyboardInput: React.FC<{ keybindings: Map<string, () => void> }> = ({keybindings}) => {

	const [displayKeys, setDisplayKeys] = useState("");
	const inputKeys = useRef("");

	const [availableCommands, setAvailableCommands] = useState([] as string[]);

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
			setAvailableCommands([]);
			keybindings.get(keys)!.apply(null);
		} else {
			setAvailableCommands(Array.from(keybindings.keys()).filter(k => k.startsWith(keys.slice(0))))
		}
	}, [displayKeys, keybindings]);

	const showAvailableCommands = (available: string[]) => {
		return (
			<ul className="bg-background p-2">
				<li>{available.length > 0 ? "Possible commands:" : "Unknown Command"}</li>
				{available.sort().map(c => <li key={c}>:{c}</li>)}
				<li>Press Escape (esc) to cancel</li>
			</ul>
		)
	}

	return (
		<div className="fixed">
			<div className="w-full bg-background">{displayKeys}</div>
			{displayKeys.length > 0 ? showAvailableCommands(availableCommands) : <></>}
		</div>
	)
}

export default KeyboardInput;