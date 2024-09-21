import { useEffect, useState } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
        (res) => res.json()
      ).then((album) => console.log(album));
    };
    getAlbums();
  }, []);

  return <div className="App" ></div>;
}

export default App
