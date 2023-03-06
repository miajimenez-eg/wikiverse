import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page'; // import the Page component
import apiURL from '../api';

export const App = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null); // change initial state to null

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err)
    }
  }

  const handlePageClick = async (index) => {
    const slug = pages[index].slug;
    const res = await fetch(`${apiURL}/wiki/${slug}`);
    const data = await res.json();
    setSelectedPage(data); // set the selected page to the fetched data
  }

  const handleBackClick = () => {
    setSelectedPage(null); // reset the selected page when the user clicks the back button
  }

  useEffect(() => {
    fetchPages();
  }, []);

  if (selectedPage === null) { // check if selectedPage is null instead of an empty string
    return (
      <main>
        <h1>WikiVerse</h1>
        <h2>An interesting 📚</h2>
        <PagesList pages={pages} handlePageClick={handlePageClick} />
      </main>
    )
  } else {
    return (
		<main>
			<Page page={selectedPage} handleBackClick={handleBackClick} /> // pass the selectedPage data as a prop to the Page component
		  <h2>{selectedPage.title}</h2>
		  <h3>Author: {selectedPage.author}</h3>
		  <p>{selectedPage.content}</p>
		  <p>Tags: {selectedPage.tags}</p>
		  <p>Published: {new Date(selectedPage.createdAt).toDateString()}</p>
		  <button onClick={selectedPage.onBackClick}>Back to Articles</button>
		</main>
	)
  }
}


