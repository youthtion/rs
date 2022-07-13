var bgLeft = 0;
function bgAnimateHandler()
{
	document.getElementById("bgAtr").style.backgroundPosition = bgLeft+"px 0px";
	bgLeft--;
	HandleHover();
	HandleOut();
	setTimeout(function(){requestAnimationFrame(bgAnimateHandler);},40);
}