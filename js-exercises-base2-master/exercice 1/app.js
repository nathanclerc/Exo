	document.getElementById('image1').addEventListener("mouseover", function onHover()
{
   document.getElementById('image1').setAttribute('src', 'images/image1_2.jpg');
});

document.getElementById('image1').addEventListener("mouseout", function offHover()
{
    document.getElementById('image1').setAttribute('src', 'images/image1.jpg');
});