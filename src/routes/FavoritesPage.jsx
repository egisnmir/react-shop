import React, { useRef } from "react";

export default function FavoritesPage() {
    const nameRef = useRef();

    const changeRefStyle = () => {
        nameRef.current.style.color = 'red';
        nameRef.current.style.fontWeight = 'bold';
    }

    return (
        <main>
            <h4 ref={nameRef}>Favorites page</h4>

            <button onClick={() => changeRefStyle()}>Change title style</button>
        </main>
    )
}
