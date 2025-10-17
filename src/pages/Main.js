import {useEffect, useState} from "react";
const Main = ({

    setSearch,
              })=>{
    const [color1, setColor1] = useState("#FFFFFF");
    const [color2, setColor2] = useState("#FFFFFF");

    const setBodyColor = (color1) =>{
        document.body.style.backgroundColor = color1;
    }
    const setBodyTextColor = (color2) =>{
        document.body.style.color = color2;
    }

    useEffect(()=>{
        setBodyColor(color1);
    },[color1])
    useEffect(()=>{
        setBodyTextColor(color2);
    },[color2])


    return (
        <>
            <div className="flex items-center gap-4" style={{margin: "20px"}}>
                {/* Пошуковий інпут */}
                <div className="relative flex-1">
                    <label htmlFor="default-search" className="sr-only">Search</label>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        required
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Перший Color Picker */}
                <div className="flex flex-col items-center">
                    <label htmlFor="colorPicker1" className="text-sm font-medium text-gray-700 dark:text-gray-300">Body</label>
                    <input
                        type="color"
                        id="colorPicker1"
                        value={color1}
                        style={{
                           borderRadius: 6,
                    }}
                        onChange={(e) => setColor1(e.target.value)}
                        className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer dark:border-gray-600"
                    />
                </div>

                {/* Другий Color Picker */}
                <div className="flex flex-col items-center">
                    <label htmlFor="colorPicker2" className="text-sm font-medium text-gray-700 dark:text-gray-300">Text</label>
                    <input
                        type="color"
                        id="colorPicker2"
                        value={color2}
                        style={{
                            borderRadius: 6,
                        }}
                        onChange={(e) => setColor2(e.target.value)}
                        className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer dark:border-gray-600"
                    />
                </div>
            </div>
        </>
    )
}
export default Main