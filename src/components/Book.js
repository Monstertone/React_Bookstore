import React from 'react'

const Book = (props) => {
  return (
    <div>
      <p>Title: {props.book.title}</p>
      <button onClick={
        () => props.addBooktoCart(props.book.id)
      }>Add to Cart</button>
    </div>
  )
}

export default Book
