var mainh = 1000;

$(document).ready(function(){
	$(".middletd").text("Fabulous Acadian on acre lot in French Branch subdivision. The inviting foyer allows entry to the formal living & dining on the right & opens to the spacious great room/den ahead & to a corner stone-faced fireplace A wall of windows overlooking to the patio....")
})
function showMore()
{
	
	btclone = document.getElementById('bt').cloneNode(true)
	$("#bt").remove()

	addRandom()

	$(".main").append(btclone)
}
function addRandom()
{
	for (i = 0; i < 6; i++)
	{
	var clone = document.getElementById('row').cloneNode(true)
	var rand = Math.floor((Math.random()*4+1))	
	rand = "kv" + rand + ".jpg"
	$(".main").append(clone)
	$("#rowimg:last").attr("src", rand)
	mainh += $("#row").outerHeight(true)
	$(".main").css("height", mainh + "px")
	}
}