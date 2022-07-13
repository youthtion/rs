function initialPrePage()
{
	document.write("<div id='loadingBg'>");
	document.write("<img src='loading.gif' id='loadingImg'></img></div>");

	if( document.body.clientHeight > 847 )
		document.getElementById("loadingBg").style.height = "720";
	else
		document.getElementById("loadingBg").style.height = "85%";
		
	document.getElementById("loadingImg").style.left = (document.body.clientWidth/2-document.getElementById("loadingImg").clientHeight/2)+"px";
}
initialPrePage();

var objOpacity = 1;
function hideDiv()
{
	setOpacity( document.getElementById("loadingImg") , objOpacity );
	setOpacity( document.getElementById("loadingBg") , objOpacity );
		
	objOpacity -= 0.1;
	if( objOpacity < 0 )
	{
		document.getElementById("loadingImg").style.zIndex = -1;
		document.getElementById("loadingBg").style.zIndex = -1;
	}
	window.requestAnimationFrame(hideDiv);
}

function DisplayIframe()
{
	if( document.readyState == "complete" )
		window.requestAnimationFrame(hideDiv);
}
