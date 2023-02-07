
fetch("https://healthdata.gov/resource/7ctx-gtb7.json?$select=state,collection_date,total_staffed_adult_icu_beds&state=KY")
.then(function(response){
	return response.json();
})
.then(function(fields){
	let placeholder = document.querySelector("#data-output");
	let output = "";
	for(let field of fields){
		output += `
			<tr>
				<td style="">${field.state}</td>
				<td style="">${field.collection_date}</td>
				<td style="">${field.total_staffed_adult_icu_beds}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = output;
});
