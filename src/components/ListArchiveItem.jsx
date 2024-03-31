import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from  '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from  '@fortawesome/free-solid-svg-icons';

function ListArchiveItem(props){
	const itemStyle = {
		fontWeight: 'normal',
	}

	if(props.style.fontWeight==='bold'){
		itemStyle.fontWeight = 'bold';
	} else {
		itemStyle.fontWeight = '';
	}

	function itemSelect(){
		props.selected(props.id);
	}

	return(
		<li style={itemStyle} data-selected={props.id} onClick={itemSelect}>
			{props.listName}
		</li>
	);
}

export default ListArchiveItem;