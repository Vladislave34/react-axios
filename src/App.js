import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

import axios from "axios";
import axiosInstance from "./api/axiosInstance";
import Main from "./pages/Main";
import Card from "./pages/Card";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "529e19ed";

function App() {
    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedFilm, setSelectedFilm] = useState('');

    useEffect(() => {
        getFilms(search);
        console.log(films);
    }, [search])

    const getFilms = async (title) => {
        try {
            const res = await axios.get(API_URL, {
                params: {
                    apikey: API_KEY,
                    s: title, // пошук за назвою
                },
            });

            if (res.data.Search) {
                setFilms(res.data.Search);
            } else {
                setFilms([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>

        <Main setSearch={setSearch} />
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {films.map(film => (
                <Card title={film.Title} image={film.Poster} imdbID={film.imdbID} />
            ))}

        </div>

    </>
  );
}

export default App;
