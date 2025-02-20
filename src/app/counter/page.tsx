'use client';

import { useState } from "react";

export default function Counter() {
    const[counter, setCounter] = useState(0);
    const[error, setError] = useState("");

    const handleIncrement = (e: React.FormEvent) => {
        e.preventDefault();
        setCounter(counter + 1);
        setError("");
    }

    const handleDecrement = (e: React.FormEvent) => {
        e.preventDefault();
        if(counter > 0) {
            setCounter(counter - 1);
            setError("");
        } else {
            setError("No se puede disminuir el numero mas");
        }
    }

    return (
        <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{counter}</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="flex space-x-4 mt-4">
                <button
                    onClick={handleIncrement}
                    className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                    Incrementar numero
                </button>
                <button
                    onClick={handleDecrement}
                    className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                    Disminuir numero
                </button>
            </form>
        </main>
    )
}