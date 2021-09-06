'use strict';
const inputCity = document.querySelector('.js-city');
const image1 = document.querySelector('.js-image1');
const image2 = document.querySelector('.js-image2');
const image3 = document.querySelector('.js-image3');

function selectACity() {
	const selectedCity = inputCity.value;
	console.log(selectedCity);
	switch (selectedCity) {
		case 'Madrid':
			image1.src =
				'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/restaurantes-de-moda-madrid-1619774290.jpg?crop=0.539xw:0.807xh;0.300xw,0.122xh&resize=640:*';
			image2.src =
				'http://d3ipks40p8ekbx.cloudfront.net/dam/jcr:bc1c7c6a-2bbd-4eb6-a411-8943df6e3452/490x373%20Madrid%20Highlights.jpg';
			image3.src =
				'https://cdn2.civitatis.com/espana/madrid/guia/madrid-en-dos-dias-m.jpg';
			break;
		case 'París':
			image1.src =
				'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_3f99dce8_800x800.jpg';
			image2.src =
				'https://www.campusfrance.org/sites/default/files/styles/mobile_visuel_principal_page/public/paris_0.jpg?itok=32Q3DEW4';
			image3.src =
				'https://cdn2.civitatis.com/francia/paris/guia/paris-museum-pass.jpg';
			break;
		case 'Nueva York':
			image1.src =
				'https://www.civitatis.com/blog/wp-content/uploads/2016/05/Estatua-de-la-Libertad.jpg';
			image2.src =
				'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/eeuu_nuevayork-puente_brooklyn_kgettyrf_555749235_tony_shi_photography_getty_images.jpg?itok=HB475K6E';
			image3.src =
				'https://comiviajeros.com/wp-content/uploads/2019/03/vista-desde-el-rockefeller-5-1170x668.jpg';
			break;
	}
}
inputCity.addEventListener('change', selectACity);
