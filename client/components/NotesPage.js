import React from 'react';
import Note from './Note';
import Snippet from './Snippet';

class NotesPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
   <div className="wrapper">
	   <div className="row">
		   <h1 className="note-title">Note Title</h1>
		   <div className="note-content">
			   <div className="col-6">
			  	<Snippet text="Baklava yemek istiyorum."/>
			   </div>
			   <div className="col-6">
			    <Note text="The word yemek can be both a verb and noun in Turkish."/>
			   </div>
		   </div>
	   </div>
   </div>
)
	}

} 

export default NotesPage;