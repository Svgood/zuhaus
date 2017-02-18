$(document).ready(function(){
	var used = ""
	var txtcolumn1 = $("<div></div>").text("")
	var txtcolumn2 = $("<div></div>").text("")
	var h1 = $("<h1></h1>").text("Beautiful House")
	var p = $("<p></p>").text("Fabulous Acadian on acre lot in French Branch subdivision. The inviting foyer allows entry to the formal living & dining on the right & opens to the spacious great room/den ahead & to a corner stone-faced fireplace A wall of windows overlooking to the patio. Kitchen features granite countertops with updated cabinets & appliances. The breakfast area is surrounded by windows exposing the secluded backyard. Side service entrance leads to laundry, kitchen & garage. Washer, dryer & Refrigerator included.")
	var table = $("<table><tr><td><img src='dl.png'></td><td></td></tr><tr><td><img src='m2.png'></td><td></td></tr><tr><td><img src='y.png'></td><td></td></tr><tr><td><img src='p.png'></td><td></td></tr></table>")

	var ar1 = $("<a><img id='larrow' src='larrow.png'></a>")
	var ar2 = $("<a><img id='rarrow' src='rarrow.png'></a>")

	txtcolumn1.attr("id", "txtc1")
	txtcolumn1.append(table)

	txtcolumn2.attr("id", "txtc2")
	txtcolumn2.append(h1)
	txtcolumn2.append(p)
	txtcolumn2.append(ar1).append(ar2)

	$(".main").append(txtcolumn1)
	$(".main").append(txtcolumn2)

	document.getElementsByTagName("td")[1].innerHTML = "350000"
	document.getElementsByTagName("td")[3].innerHTML = "2555"
	document.getElementsByTagName("td")[5].innerHTML = "1997"
	document.getElementsByTagName("td")[7].innerHTML = "4-10"

	$("#img1").click(function()
	{
		used = "#img1"
		$(this).css("opacity", 1)
		$("#img2").fadeOut()
		$("#img3").fadeOut()
		$("#img4").fadeOut()

		$("#txtc1").animate({left: "0px"}, 1500)
		$("#txtc2").animate({left: "400px"}, 1500)
	})
	$("#img2").click(function()
	{	
		used = "#img2"
		$(this).css("opacity", 1)
		$("#img1").fadeOut()
		$("#img3").fadeOut()
		$("#img4").fadeOut()

		$(this).css("position","absolute")
		$(this).animate({left: "0px"}, "slow")
		$("#txtc1").animate({left: "0px"}, 1500)
		$("#txtc2").animate({left: "400px"}, 1500)
	})
	$("#img3").click(function()
	{
		used = "#img3"
		$(this).css("opacity", 1)
		$("#img1").fadeOut()
		$("#img2").fadeOut()
		$("#img4").fadeOut()

		$(this).css("position","absolute")
		$(this).animate({top: "0px"}, "slow")
		$("#txtc1").animate({left: "0px"}, 1500)
		$("#txtc2").animate({left: "400px"}, 1500)
	})
	$("#img4").click(function()
	{
		used = "#img4"
		$(this).css("opacity", 1)
		$("#img1").fadeOut()
		$("#img3").fadeOut()
		$("#img2").fadeOut()

		$(this).css("position","absolute")
		$(this).animate({left: "0px", top: "0px"}, "slow")
		$("#txtc1").animate({left: "0px"}, 1500)
		$("#txtc2").animate({left: "400px"}, 1500)
	})
	$("#larrow").click(function()
	{
		$("#txtc1").animate({left: "-1000px"},500)
		$("#txtc2").animate({left: "1500px"},500)
		$(used).css("opacity", "0.4")
		$(used).css("position", "static")
		$(used).addClass(".main img:hover")
		$("#img1").fadeIn()
		$("#img3").fadeIn()
		$("#img2").fadeIn()
		$("#img4").fadeIn()

	})
})
