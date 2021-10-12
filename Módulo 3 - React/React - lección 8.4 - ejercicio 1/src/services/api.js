const callToApi = () => {
	// Llamamos al API
	return fetch(
		'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1/products.json'
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response.items);
			return response.items;
		});
};
export default callToApi;
