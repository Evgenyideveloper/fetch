const getData = () => {
	fetch('./db.json')
	.then(response => {
	  return response.json()
	})
	.then(data => {
		sendData(data)
	})
	.catch(error =>{
		console.log(data)
	})
  }
  getData();

  const sendData = (data) =>{
	  fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
		  'Content-type': 'application/json; charset=UTF-8',
		},
	  })
	  .then(response => {
		return response.json()
	  })
	  .then(data => {
		console.log(data)
	  })
	  .catch(error =>{
			console.log(data)
		})
  }
