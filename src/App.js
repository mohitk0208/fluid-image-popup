import React from  "react";
import Gallery from "./components/Gallery";


const App = () => {

    const showFull = (full,caption) => {
        console.log(full);
        console.log(caption);
    }

    return (
        <div>
            <Gallery showFull={showFull} />
        </div>
    )
}

export default App;