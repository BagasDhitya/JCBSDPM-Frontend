import { useState } from "react";

export function useCounter() {
    const [value, setValue] = useState<number>(0)

    function increment() {
        setValue(value + 1)
    }

    function decrement() {
        setValue(value - 1)
    }

    return {
        value,
        increment,
        decrement
    }
}