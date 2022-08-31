import troll from "../Images/troll.png"
import "../CSS/meme.css"

export default function Header(){
    return(
        <header className="head">
            
                <img className="head_image" src={troll} alt="foo" />
                <h2 className="h2-title">Meme Generator</h2>
                <h4 className="h4-title">Made with React</h4>
            
        </header>
    )
}