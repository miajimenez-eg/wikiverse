import React, { useState } from 'react';
import { Page } from './Page';

export const PagesList = ({pages, handlePageClick}) => {

		return (
			<>
				{pages.map((page, idx) => {
					return (
						<>
						<a id='wiki' onClick={() => handlePageClick(idx)}>
						<Page page={page} key={idx}/>
						</a>
					</>
					)
				})
			  }
			</>
		  );
	
	

	
	  
} 
