function ImageController() {

	var imageService = new ImageService()//Your ImageService is a global constructor function what can you do here if you new it up?

	imageService.getImage(function (image) {
		if (image.large_url){
		document.body.style.backgroundImage = `url("${image.large_url}")`
		}else{
			document.body.style.backgroundImage = `url("${image.url}")`
		}
		console.log("this url",image.url)
		console.log("this large url",image.large_url)
	})
	
}



// var img = new ImageService()