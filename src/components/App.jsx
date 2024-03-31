import '../css/App.css';
import React, { useState } from "react";
import CurrentList from './CurrentList';
import ListArchive from './ListArchive';
import Item from './Item';
import CreateList from './CreateList';

function App() {
    const [lists, setLists] = useState([]);

    function newList(listName){
        setLists(prevLists => {
            return[
                ...prevLists,
                listName
            ]
        });
    }

    return (
        <div className="App">
            <CreateList newList={newList}/>
            <div className='grocery-lists container'>
                <div className="container">
                    { lists.length===0 ?
                        <section>
                            <h2>No lists yet! Please create a new one.</h2>
                        </section>
                        :
                        <CurrentList 
                            currentList={lists[lists.length - 1]}
                        />
                    }
                    <ListArchive 
                        listArchive = {lists}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
