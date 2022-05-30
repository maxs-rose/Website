import { KeyboardContext } from "@pages/_app";
import React, { useContext } from "react";

export default function useKeybindings(key: string, callback: () => void) {
	const context = useContext(KeyboardContext);

	React.useEffect(() => {
		context.add(key, callback);

		return () => {
			context.remove(key);
		}
	}, [context, key, callback])
}
