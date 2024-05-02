// create your App component here
import { useState,useEffect } from "react";

function App () {

    const [image,setImage] = useState("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setImage(data.message);
            setIsLoading(false);
        });
    },[])

    return (
        <div>
            {isLoading ? <p>Loading...</p> : <img src = {image} alt="A Random Dog"/>}
        </div>
    )
}

export default App;