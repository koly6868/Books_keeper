import React from 'react';
import "./list.css"
export default ({bookmarks}) => 
    <div className="list">
        <ul>
            {bookmarks.map(b =>
                <li className="item">
                    <p>{b.name + " , pg. " + b.page}</p>
                </li> )}
        </ul>
    </div>