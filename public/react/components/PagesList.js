import React, { useState } from 'react';
import { Page } from './Page';
import apiURL from '../api';

export const PagesList = ({pages}) => {

	const [selectedPage, setSelectedPage] = useState(null);

	const handlePageClick = async (slug) => {
		const res = await fetch(`${apiURL}/wiki/${slug}`);
		const data = await res.json();
		setSelectedPage(data);
	}

	const handleBackClick = () => {
		setSelectedPage(null);
	}

	return (
		<>
		  {selectedPage ? (
			<Page page={pages.find((page) => page.slug === selectedPage)} onBackClick={handleBackClick} />
		  ) : (
			pages.map((page, idx) => (
			  <div key={idx} onClick={() => handlePageClick(page.slug)}>
			    <h2>{page.title}</h2>
			  </div>
			))
		  )}
		</>
	  );
	  
} 
