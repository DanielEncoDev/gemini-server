import { useState, useEffect } from 'react';

export default function ResponseMessage({ response }) {
    const [displayedData, setDisplayedData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        const entries = Object.entries(response);


        if (currentIndex < entries.length) {
        const [clave, valor] = entries[currentIndex];
        const fullText =  `${clave}: ${valor?.toString() || ""}` ;

        let charIndex = 0;
        const timer = setInterval(() => {
            if (charIndex < fullText.length) {
            setCurrentText((prev) =>  prev ? prev + fullText[charIndex-1] : fullText.slice(0,1));
            charIndex++;
            } else {
            clearInterval(timer);
            setDisplayedData((prev) => [...prev, [clave, valor]]);
            setCurrentIndex((prev) => prev + 1);
            setCurrentText("");
            }
        }, 50); 

        return () => clearInterval(timer);
        }
    }, [currentIndex, response]);

    return (
        <div className="absolute inset-0 flex justify-center items-center">
            <div>
                <h1 className="text-2xl font-bold">'Estos son los datos que me proporcionaste: '</h1>
                <hr />
                <br />
                <ul>
                    {displayedData.map(([clave, valor]) => (
                    <li key={clave} className="mb-2">
                        <strong>{ clave } </strong> {valor?.toString() || ""}
                    </li>
                    ))}
                    {currentText && (
                    <li className="typewriter inline-block">{currentText}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}