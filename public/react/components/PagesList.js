import React, { useState } from 'react';
import { Page } from './Page';

export const PagesList = ({pages}) => {

	const [selectedPage, setSelectedPage] = useState(null);

	const handlePageClick = async (slug) => {
		const res = await fetch(`${apiURL}/wiki/${slug}`);
		const data = await res.json();
		setSelectedPage(data);
	}

	const handleBackClick = async () => {
		setSelectedPage(null);
	}

	return (
		<>
		  {selectedPage ? (
			<Page page={selectedPage} onBackClick={handleBackClick} />
		  ) : (
			pages.map((page, idx) => (
				<>
			  <Page page={page} key={idx} onPageClick={handlePageClick} />
			  </>
			))
		  )}
		</>
	  );
	  
} 
