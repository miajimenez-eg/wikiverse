import React from 'react';

export const Page = (props) => {

  return (
    <>
      {props.page && (
        <>
          <h2>{props.page.title}</h2>
          <h3>Author: {props.page.author}</h3>
          <p>{props.page.content}</p>
          <p>Tags: {props.page.tags}</p>
          <p>Published: {new Date(props.page.createdAt).toDateString()}</p>
          <button onClick={props.onBackClick}>Back to Articles</button>
        </>
      )}
    </>
  );
} 
	