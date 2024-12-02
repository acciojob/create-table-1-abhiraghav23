
function insert_Row() {
	const table = document.getElementById('sampleTable');

	  const row1 = table.insertRow(0);

	const cell1=row1.insertCell(0);
	const cell2 = row1.insertCell(1);

	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";

  
}



