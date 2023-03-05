import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages}) => {

	const handlePageClick = async (slug) => {
		const res = await fetch(`${apiURL}/wiki/${slug}`);
		const data = await res.json();
		setSelectedPage(data);
	}

	const handleBackClick = async () => {
		setSelectedPage(null);
	}

	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} />
			})
		}
	</>
} 
