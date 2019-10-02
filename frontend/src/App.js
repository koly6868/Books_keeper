import React, { useState } from 'react';
import Bookmark_list from "./components/BookmarksList"
import BooksList from "./components/BooksList"
import './App.css';
import BoolsList from './components/BooksList';


let bookmarks = [{
  name: "one",
  page : 2
},
{
  name: "two",
  page : 123
}]

let books = [
  {name : "J. Roling"}
]

export default (props) => {
  let [is_book_opend, set_book_state] = useState(false)

  return  <div className="app">
          <div className="top_bar">
            <input className="btn" type="button" value="Open book" onClick={() => set_book_state(true)} />
            <input className="btn" type="button" value="Close book" onClick={() => set_book_state(false)} />
          </div>
          <div className="main_page">
            {is_book_opend ?  <Bookmark_list bookmarks={bookmarks} /> : <BooksList books={books} />}
            <div className="book"></div>
          </div>
        </div>
}

