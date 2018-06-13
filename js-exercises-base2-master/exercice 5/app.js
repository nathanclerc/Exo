/*
	document.getElementById('image1').addEventListener("mouseover", function onHover()
{
   document.getElementById('image1').setAttribute('src', 'images/image1_2.jpg');
});

	document.getElementById('image2').addEventListener("mouseover", function onHover()
{
   document.getElementById('image2').setAttribute('src', 'images/image2_2.jpg');
});

	document.getElementById('image3').addEventListener("mouseover", function onHover()
{
   document.getElementById('image3').setAttribute('src', 'images/image3_2.jpg');
});

	document.getElementById('image4').addEventListener("mouseover", function onHover()
{
   document.getElementById('image4').setAttribute('src', 'images/image4_2.jpg');
});

	document.getElementById('image5').addEventListener("mouseover", function onHover()
{
   document.getElementById('image5').setAttribute('src', 'images/image5_2.jpg');
});
*/
	var img = document.getElementsByClassName("image").addEventListener("mouseover");
	console.log(img);
	document.getElementById(img).addEventListener("mouseover", function onHover(){

	if (img == 'image1') {

   document.getElementById('image1').setAttribute('src', 'images/image1_2.jpg');
} else if (img == 'image2') {
	document.getElementById('image2').setAttribute('src', 'images/image2_2.jpg');
}
});