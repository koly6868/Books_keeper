import React from "react";
import "./list.css"

export default ({books}) =>
    <div className="list">
        <ul>
            {books.map(b =>
                <li className="item" onClick={() => upload_book(b.src)}>
                    <p>{b.name}</p>
                </li>)}
        </ul>
    </div>


let upload_book = (src) => {

}