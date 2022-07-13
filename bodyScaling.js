function ChangeBody()
{
	if( document.body.clientHeight > 847 )
		document.getElementById("bgAtr").style.height = "720";
	else
		document.getElementById("bgAtr").style.height = "85%";
		
	document.getElementById("bgAtr").style.backgroundSize = "auto 100%";
	document.getElementById("bgAtr").style.clip = "rect(0,"+document.getElementById("bgAtr").clientWidth+"px,"+document.getElementById("bgAtr").clientHeight+"px,0)";
	
	document.getElementById("content1").style.width = document.getElementById("content1").clientHeight*0.7;
	document.getElementById("content1").style.left = document.body.clientWidth/2 - document.getElementById("content1").clientWidth;
	document.getElementById("content2").style.width = document.getElementById("content2").clientHeight*0.95;
	document.getElementById("content2").style.left = document.body.clientWidth/2 + document.getElementById("content1").clientWidth*0.2;
	document.getElementById("content3").style.width = document.getElementById("content3").clientHeight*1.45;
	document.getElementById("content3").style.left = document.body.clientWidth/2 - document.getElementById("content1").clientWidth*0.2;
	document.getElementById("content4").style.width = document.getElementById("content4").clientHeight*0.85;
	document.getElementById("content4").style.left = document.body.clientWidth/2 - document.getElementById("content1").clientWidth*0.08;
	
	for( i = 1 ; i < 5 ; i++ )
		document.getElementById("b"+i).style.borderWidth = document.getElementById("bgAtr").clientHeight*0.005+"px";
	
	for( i = 1 ; i < 7 ; i++ )
		document.getElementById("h"+i).style.fontSize = document.getElementById("bgAtr").clientHeight*0.05+"px";
	
	for( i = 1 ; i < 7 ; i++ )
		document.getElementById("t"+i).style.fontSize = document.getElementById("bgAtr").clientHeight*0.035+"px";
	
	for( i = 0 ; i < 6 ; i++ )
	{
		document.getElementById("anim"+i).style.height = document.getElementById("anim"+i).clientWidth * animHeight[i] / animWidth[i];
		document.getElementById("anim"+i).style.backgroundSize = (document.getElementById("anim"+i).clientWidth*10)+"px "+(document.getElementById("anim"+i).clientHeight*(Math.floor(animLength[i]/10)+1))+"px";
	}
}