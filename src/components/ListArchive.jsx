import React, {useState} from 'react';
import ListArchiveItem from './ListArchiveItem';

function ListArchive(props){
	const [selected, setSelected] = useState('');

	function handleSelect(itemID){
		setSelected(itemID);
	}

	return(
		<aside>
			<h2>List Archives</h2>
			<ul>
				{/* below: archiveItem represents the current item being processed in the array, and index represents the index of that element */}
				{props.listArchive.slice().reverse().map((archiveItem, index) =>{ // use the .slice().reverse() to loop through the array from end to beginning. This way the newest lists are at the top.
					return(
						<ListArchiveItem 
							key = {index}
							id = {index}
							listName = {archiveItem}
							style = {{fontWeight: selected === index ? 'bold' : 'normal'}}
							selected = {handleSelect}
						/>
					);
				})}
			</ul>
		</aside>
	);
}

export default ListArchive;