import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from  '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from  '@fortawesome/free-solid-svg-icons';

function CurrentListHeading(props){
	return(
		<h2 className="current-list-heading">
			{props.headingName}
			<span>
				<FontAwesomeIcon icon={faSquareXmark} />
			</span>
		</h2>
	);
}

export default CurrentListHeading;