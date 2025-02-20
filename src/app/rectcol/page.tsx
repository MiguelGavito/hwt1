'use client';

import { useState } from "react";

interface RectangleProps {
    color: string;
    onClick?: () => void;
}

function Rect({ color, onClick }: RectangleProps) {
    return (
        <div 
            onClick={onClick} 
            className={`cursor-pointer ${color}`}
            style={{ width: "256px", height: "128px" }}
        ></div>
    );
}


export default function RectCol() {
    const[rectCol, setRectCol] = useState("bg-gray-500");

{/*
    const handleRed = (e: React.FormEvent) => {
        e.preventDefault();
        setRectCol("red-500");
    }
    const handleBlue = (e: React.FormEvent) => {
        e.preventDefault();
        setRectCol("blue-500");
    }
    const handleOrange = (e: React.FormEvent) => {
        e.preventDefault();
        setRectCol("orange-500");
    }
    const handleGreen = (e: React.FormEvent) => {
        e.preventDefault();
        setRectCol("green-500");
    }
*/}


    return (
        <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
            {/*Rectangulo grande} */}
            <div className={`cursor-pointer ${rectCol}`} style={{ width: "528px", height: "128px" }}></div>
            

            {/*Rectangulos pequeños */}
            <div className="grid grid-cols-2 gap-4 w-[528px]">
                <div className="w-64 h-32 bg-red-500 cursor-pointer" onClick={() => setRectCol("bg-red-500")} ></div>
                <div className="w-64 h-32 bg-blue-500 cursor-pointer" onClick={() => setRectCol("bg-blue-500")} ></div>
                <div className="w-64 h-32 bg-orange-500 cursor-pointer" onClick={() => setRectCol("bg-orange-500")} ></div>
                <div className="w-64 h-32 bg-green-500 cursor-pointer" onClick={() => setRectCol("bg-green-500")} ></div>
            </div>
        </main>
    )
}