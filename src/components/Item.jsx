import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from  '@fortawesome/free-regular-svg-icons';
import { faCheck } from  '@fortawesome/free-solid-svg-icons';
import { faTrash } from  '@fortawesome/free-solid-svg-icons';

function Item(){
	return(
		<li>
			Bread
			<FontAwesomeIcon icon={faSquare} />
		</li>
	);
}

export default Item;