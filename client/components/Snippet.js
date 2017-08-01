import React from 'react';

// for each word return <p>{translation}</p><p>{original-text}</p>
// use CSS to make the translation above the original-text

let arr = [{'baklava': 'baklava'}, {'yemek': 'to eat/food'}, {'istiyorum': 'I want'}];
let example = arr.forEach((obj) => {
	return (<div>
	<p>{arr.obj}</p>
	<p>{obj}</p>
	</div>)
})


const Snippet = 
(props) => {
	return (
		<div className="snippet">
		{example}
	</div>
		)
};


export default Snippet;