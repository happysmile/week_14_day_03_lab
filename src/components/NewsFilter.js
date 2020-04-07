import React from 'react';

const NewsFilter = (props) => {
  return(
      <input onInput={props.handleInputChange}
      type="text"
      placeholder="search by title" />
  );
};

export default NewsFilter;
