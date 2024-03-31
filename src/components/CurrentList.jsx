import React from "react";
import CurrentListHeading from "./CurrentListHeading";
import InputForm from './InputForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from  '@fortawesome/free-regular-svg-icons';
import { faCheck } from  '@fortawesome/free-solid-svg-icons';
import { faTrash } from  '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from  '@fortawesome/free-solid-svg-icons';

function CurrentList(props){
	return(
		<section>
			<CurrentListHeading headingName={props.currentList}/>
			<InputForm/>
		</section>
		// <section>
		// 	<CurrentListHeading/>
		// 	<InputForm/>
		// 	<h3>Safeway</h3>
		// 	<ul>
		// 		<li>
		// 			Bread
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 		<li>
		// 			Milk
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 		<li>
		// 			Deoderant
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 	</ul>
		// 	<h3>Walmart</h3>
		// 	<ul>
		// 		<li>Bleach
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 		<li>Dishwasher Detergent
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 		<li>Soda
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 		<li>Socks
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 	</ul>
		// 	<h3>Sam's Club</h3>
		// 	<ul>
		// 		<li>Roasted Chicken
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 		<li>Laundry Detergent
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 		<li>Orange Juice
		// 			<FontAwesomeIcon icon={faSquare} />
		// 		</li>
		// 	</ul>
		// </section>
	);
}

export default CurrentList;