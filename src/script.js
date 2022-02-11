var product = [];
function myfunction() {
	var Id = document.getElementById('input_1').value;
	var Name = document.getElementById('input_2').value;
	var Price = document.getElementById('input_3').value;

	var List = {
		Id: Id,
		Name: Name,
		Price: Price
	};

	product.push(List);

	adding(product);
}

function adding(product) {
	var html = '<table><tr><th>Product Id      </th></t><th>Product Name      </th></t><th>Product Price      </th></tr>';
	// Write Logic here
	for (let i = 0; i < product.length; i++) {
		html +=
			'<tr><td>' +
			product[i].Id +
			'</td><td>' +
			product[i].Name +
			'</td><td>' +
			' USD ' +
			product[i].Price +
			'</td></tr>';
	}
	html += '</table>';
	document.getElementById('output').innerHTML = html;
    document.getElementById("output").style.paddingRight = "4em";
}
