import React, {useState} from 'react';

export default function Dashboard() {
    const [prevValue, setPrevValue] = useState("");
    const [currentValue, setCurrentValue] = useState("0");
    const [operation, setOperation] = useState("");
    const [overwrite, setOverwrite] = useState(true);
    const [result, setResult] = useState<string[]>([]);

    const equals = () => {
        const val = calculate();
        const newResult = val.toString();

        setResult((prevResults) => {
            const updatedResults = [...prevResults, newResult];
            return updatedResults.length > 5 ? updatedResults.slice(1) : updatedResults;
        });

        setCurrentValue(newResult);
        setPrevValue("");
        setOperation("");
        setOverwrite(true);
    };

    const calculate = () => {
        if (!prevValue || !operation) return currentValue;

        const curr = parseFloat(currentValue);
        const prev = parseFloat(prevValue);

        let result;
        switch (operation) {
            case "/":
                result = prev / curr;
                if (curr === 0) {
                    return "Error";
                }
                break;
            case "*":
                result = prev * curr;
                break;
            case "-":
                result = prev - curr;
                break;
            case "+":
                result = prev + curr;
                break;
            default:
                return currentValue;
        }
        return result;
    };

    const clear = () => {
        setPrevValue("");
        setOperation("");
        setResult([]);
        setCurrentValue("0");
        setOverwrite(true);
    };

    const del = () => {
        setCurrentValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
        setOverwrite(true);
    };

    const selectOperation = (x: string) => {
        if (!prevValue && x === "-" && currentValue === "0") {
            setCurrentValue("-");
            setOverwrite(false);
            return;
        } else if (currentValue !== "0" && prevValue && x === "-") {
            setCurrentValue("-");
            setOverwrite(false);
            return;
        }

        if (x === "+" && currentValue === "-") {
            setCurrentValue("");
            return;
        }


        if (prevValue && currentValue && operation) {
            const val = calculate();
            setPrevValue(`${val}`);
            setCurrentValue("0");
        } else {
            setPrevValue(currentValue);
        }
        setCurrentValue("0");
        setOperation(x);
        setOverwrite(true);
    };

    const setDigit = (digit: string) => {
        if (currentValue[0] === "0" && digit === "0") return;
        if (currentValue.includes(".") && digit === ".") return;

        if (overwrite && digit !== ".") {
            setCurrentValue(digit);
        } else {
            setCurrentValue(`${currentValue}${digit}`);
        }
        setOverwrite(false);
    };

    return (
        <div className="bg-gray-500 relative min-h-screen flex flex-col items-center justify-center">
            <div className="md:w-96 w-full bg-gray-800 text-white rounded-lg shadow-lg relative">

                <div
                    className="bg-gray-700 text-right px-6 py-2 pt-6 text-2xl md:text-3xl font-mono rounded-t-lg flex">
                    <div className="text-sm font-mono">
                        {result.length > 0 && result.map((res, index) => (
                            <div key={index} className="text-left">
                                {res}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="bg-gray-700 text-right px-8 py-4 text-2xl md:text-3xl font-mono rounded-t-lg flex justify-end items-end gap-2">
                    {currentValue}
                    <span className={"text-sm"}>{operation}</span>
                </div>

                <div className="grid grid-cols-4 gap-2 p-4">
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={clear}>
                        C
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={del}>
                        DEL
                    </button>
                    <a
                        href={"/support"}
                        className="col-span-1 bg-gray-600 p-4 rounded-lg flex items-center justify-center">
                        ?
                    </a>
                    <button
                        className="col-span-1 bg-orange-500 p-4 rounded-lg"
                        onClick={() => selectOperation("/")}>
                        /
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("1")}>
                        1
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("2")}>
                        2
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("3")}>
                        3
                    </button>
                    <button
                        className="col-span-1 bg-orange-500 p-4 rounded-lg"
                        onClick={() => selectOperation("*")}>
                        X
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("4")}>
                        4
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("5")}>
                        5
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("6")}>
                        6
                    </button>
                    <button
                        className="col-span-1 bg-orange-500 p-4 rounded-lg"
                        onClick={() => selectOperation("-")}>
                        -
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("7")}>
                        7
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("8")}>
                        8
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("9")}>
                        9
                    </button>
                    <button
                        className="col-span-1 bg-orange-500 p-4 rounded-lg"
                        onClick={() => selectOperation("+")}>
                        +
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit("0")}>
                        0
                    </button>
                    <button className="col-span-1 bg-gray-600 p-4 rounded-lg" onClick={() => setDigit(".")}>
                        .
                    </button>
                    <button className="col-span-1 bg-orange-500 p-4 rounded-lg" onClick={equals}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}
