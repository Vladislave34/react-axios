import axios from "axios";
import {useEffect, useState} from "react";
const API_KEY = "529e19ed";
const API_URL = "https://www.omdbapi.com/";
const Card = ({ image, title, imdbID }) => {

    const [selectedFilm, setSelectedFilm] = useState({});
    const getFilmDetails = async (imdbID) => {
        try {
            const res = await axios.get(API_URL, {
                params: {
                    apikey: API_KEY,
                    i: imdbID,
                    plot: "short",
                },
            });
            setSelectedFilm(res.data);
            // console.log(res.data);
            // setSelectedFilm(res.data.Plot);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getFilmDetails(imdbID);

    }, [])
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="#">
                <img
                    className="w-full h-64 object-cover"  // 🔹 повна ширина, фіксована висота, обрізання зображення
                    src={image}
                    alt={title}
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {selectedFilm.Title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{selectedFilm.Plot}</p>
            </div>
        </div>
    );
};

export default Card;