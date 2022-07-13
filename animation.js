var animSrc = new Array(	"background-image:url(Kagome.jpg);","background-image:url(Zen.jpg);","background-image:url(Napoleon.jpg);",
						"background-image:url(Sudoku.jpg);","background-image:url(Teaching.jpg);","background-image:url(Bricks.jpg);");
var animLength = new Array(102,133,328,58,107,313);
var animWidth = new Array(223,229,150,142,179,87);
var animHeight = new Array(146,125,215,205,118,88);
var animIndex = new Array(1,1,1,1,1,1);
var animActTimes = new Array(0,0,0,0,0,0);

function setFrame( object , rowLength , frame )
{
	object.style.backgroundPosition = (frame%rowLength*object.clientWidth*-1)+"px "+(Math.floor(frame/rowLength)*object.clientHeight*-1)+"px";
}

function actAnim( animNum , period )
{
	if( animActTimes[animNum]+1 >= period )
	{
		animActTimes[animNum] = 0;
		setFrame(document.getElementById("anim"+animNum),10,animIndex[animNum]);
		animIndex[animNum]++;
		if(animIndex[animNum] >= animLength[animNum])
					animIndex[animNum] = 0;
	}
	else
		animActTimes[animNum]++;
}