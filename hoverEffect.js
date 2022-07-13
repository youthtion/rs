var contentOpacity = new Array(100,100,100,100);
var hoverState = -1;

function setOpacity( object , opacity )
{
	object.style.opacity =  opacity;
	object.style.MozOpacity = opacity;
	object.style.KhtmlOpacity = opacity;
	object.style.filter = "alpha(opacity = "+(opacity*100)+")";
}

function HandleHover()
{
	if( hoverState != -1 )
	{
		contentOpacity[hoverState] -= 30;
		if( contentOpacity[hoverState] < 0 )
			contentOpacity[hoverState] = 0;
		setOpacity(document.getElementById(hoverState),contentOpacity[hoverState]*0.01);
		handleAnimations();
	}
}

function handleAnimations()
{
	switch(hoverState)
	{
		case 0:
			actAnim(0,1);
			actAnim(1,1);
			break;
		case 1:
			playSlideShow(1);
			break;
		case 2:
			actAnim(2,1);
			actAnim(3,2);
			break;
		case 3:
			actAnim(4,1);
			actAnim(5,1);
			break;
	}
}

function HandleOut()
{
	for( i = 0 ; i < 4 ; i++ )
		if( hoverState != i )
		{
			contentOpacity[i] += 15;
			if( contentOpacity[i] > 100 )
				contentOpacity[i] = 100;
			setOpacity(document.getElementById(i),contentOpacity[i]*0.01);
		}
}

function LinkHover( object )
{
	object = document.getElementById(object.id.charAt(4));
	hoverState = parseInt(object.id);
}

function LinkOut( object )
{
	object = document.getElementById(object.id.charAt(4));
	hoverState = -1;
}