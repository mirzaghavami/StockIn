import {useEffect} from "react";

// The following function is intended to provide a reusable custom hook inorder to apply a function by passing the key code and function
export function useKey(key: string, action: () => void): void {
    useEffect(
        function () {
            function callback(e: KeyboardEvent) {
                if (e.code.toLowerCase() === key.toLowerCase()) {
                    action();
                }
            }

            document.addEventListener("keydown", callback);

            return function () {
                document.removeEventListener("keydown", callback);
            };
        },
        [action, key]
    );
}
