import { useState } from "react"
import "../CSS/meme.css"
import memesData from "../memesData"

export default function Meme(){

    const [memeImage, setImage] = useState("")

    
    
    function handle_click(){
        const meme_array = memesData.data.memes
        const random_number = Math.floor(Math.random() * meme_array.length)
        setImage(meme_array[random_number].url)
    }

    return(

        <main>
        <div className="form">
            <input placeholder="Top text" type="text" className="input-text" />
            <input placeholder="Bottom text" type="text" className="input-text" />
            <button onClick={handle_click} className="input-button">Get a new Meme Image 📷</button>
        </div>
        <img className="new-image" src={memeImage} alt="bar" />
    </main>
        )
}