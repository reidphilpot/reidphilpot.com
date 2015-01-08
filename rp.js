window.onload = function() {
	var facets = [
		{ path: '1.jpg', baseColor: 'white' },
		{ path: '2.jpg', baseColor: 'black' },
		{ path: '3.jpg', baseColor: 'white' },
		{ path: '4.jpg', baseColor: 'white' },
		{ path: '5.jpg', baseColor: 'white' }	
	]
	, facet = facets[Math.floor(Math.random() * facets.length)]

	d3.select('main')
		.data([facet])
		.style('background-image', backgroundImage)
		.select('.circle')
		.style('color', baseColor)
		.style('border-color', baseColor)
}

function baseColor(d) { 
	return d.baseColor
}

function backgroundImage(d) { 
	return 'url(' + d.path + ')' 
}