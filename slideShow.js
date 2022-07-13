var slidesOpacity = new Array(100,0,0,0);
var slideState = 1;
var slideActTimes = 0;
var deltaOpacity = -10;

function playSlideShow( period )
{
	if( slideActTimes+1 >= period )
	{
		slideActTimes = 0;
		slidesOpacity[slideState-1] += deltaOpacity;
		if( slidesOpacity[slideState-1] < 0 )
		{
			slidesOpacity[slideState-1] = 0;
			slideState = ( slideState == 4 ? 1 : slideState+1 );
			deltaOpacity = 10;
		}
		if( slidesOpacity[slideState-1] > 100 )
		{
			slidesOpacity[slideState-1] = 100;
			deltaOpacity = -10;
			slideActTimes -= 10;
		}
		setOpacity(document.getElementById("p"+slideState),slidesOpacity[slideState-1]*0.01);
	}
	else
		slideActTimes++;
}