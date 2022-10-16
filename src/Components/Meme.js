import React from "react";
import "../CSS/meme.css"


export default function Meme(){

    const [allMemeImages, setAllMemeImages] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [memesArray, setMemesArray] = React.useState([]);
    

    // const [memeImage, setImage] = useState("")

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemesArray(data.data.memes))
    }, [])
    
    
    function handle_click(){
        
        const random_number = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[random_number].url
        setAllMemeImages(prevAllImages => {
            return {
                ...allMemeImages,
                randomImage: url
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setAllMemeImages(prevAllImages => ({
            ...prevAllImages,
            [name]: value
        }))
    }

    return(

        <main>
        <div className="form">

            <input 
            placeholder="Top text" 
            type="text" 
            className="input-text"
            name="topText"
            value={allMemeImages.topText}
            onChange = {handleChange}
             />

            <input 
            placeholder="Bottom text" 
            type="text" 
            className="input-text"
            name="bottomText"
            value={allMemeImages.bottomText}
            onChange = {handleChange}
             />

            <button 

            onClick={handle_click} 
            className="input-button">
                Get a new Meme Image 📷

            </button>

        </div>

        <div className="meme" >

        <img className="new-image" src={allMemeImages.randomImage} alt="bar" />
        <h2 className="meme--text top">{allMemeImages.topText}</h2>
        <h2 className="meme--text bottom">{allMemeImages.bottomText}</h2>

        

        </div>
    </main>
        )
}