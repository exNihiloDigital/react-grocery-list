import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from  '@fortawesome/free-solid-svg-icons';

function CreateList(props){
	const [list, setList] = useState([]);

	// need to handle the change of the text first.
	function handleChange(event){ 
		const listEntry = event.target.value; 
		setList(listEntry);
	}

	//on submit, pass item to prop function that will be called in App.jsx. App.jsx needs to be the source of truth for this info since it will be used in multiple components.
	function submitList(event){
		props.newList(list); // sent list to newList prop, to be handled in App.jsx
		setList(''); //reset list entry for new one
		event.preventDefault(); //prevent page from reloading
	}

	return(
		<div className="create-list">
			<div className="container">
				<h2>Create New List</h2>
				<form action="submit">
					<label htmlFor="list-name">List Name</label>
					<input type="text" id="list-name" onChange={handleChange} value={list}/>
					<button onClick={submitList}>
						<FontAwesomeIcon icon={faCirclePlus} />
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateList;