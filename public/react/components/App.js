import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [selectedPage, setSelectedPage] = useState('');
	

	async function fetchPages(){
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
		console.log(slug);
		const res = await fetch(`${apiURL}/wiki/${slug}`);
		const data = await res.json();
		console.log(data);
		setSelectedPage(data);
	}

	// const handleBackClick = () => {
	// 	setSelectedPage('');
	// }

	useEffect(() => {
		fetchPages();
	}, []);

	if(selectedPage === ''){
		return (
			<main>	
		  <h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
				<PagesList pages={pages} handlePageClick={handlePageClick} />
			</main>
		)
	} else if(selectedPage !== ''){
		return <>
			<main>
			  	<h2>{selectedPage.title}</h2>
			  	<h3>Author: {selectedPage.author}</h3>
			  	<p>{selectedPage.content}</p>
			  	<p>Tags: {selectedPage.tags}</p>
			  	<p>Published: {new Date(selectedPage.createdAt).toDateString()}</p>
			  	<button onClick={selectedPage.onBackClick}>Back to Articles</button>
			</main>
			</>
		
	}

	
}