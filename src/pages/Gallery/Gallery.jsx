import { useEffect } from "react";
import "./Gallery.css";

function Gallery() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="gallery">
            <h2>Gallery</h2>
        </div>
    );
};

export default Gallery;