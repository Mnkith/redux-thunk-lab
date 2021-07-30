import React from 'react';

export default ({catPics}) => {
  return <div>
    {catPics.map( pic => <img src={ pic.url } alt={ pic.id } />)}
  </div>
}  