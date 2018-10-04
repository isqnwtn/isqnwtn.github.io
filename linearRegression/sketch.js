var data=[]
var m=1;
var b=0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
}

function drawLine()
{
	var x1 = 0;
	var y1 = m*x1+b;
	var x2 = 1;
	var y2 = m*x2+b;
	var x1 = map(x1,0,1,0,windowWidth);
	var x2 = map(x2,0,1,0,windowWidth);
	var y1 = map(y1,0,1,windowHeight,0);
	var y2 = map(y2,0,1,windowHeight,0);

	stroke(255,0,255);
	line(x1,y1,x2,y2);
}

function plotline()
{
	loadPixels();
	for(var i=0; i<windowWidth; i++)
	{
		var x=i;var y=20*sin(x);
		pixels[(x+y*windowWidth)*4+0]=255;
		pixels[(x+y*windowWidth)*4+1]=255;
		pixels[(x+y*windowWidth)*4+2]=255;
		pixels[(x+y*windowWidth)*4+3]=255;
	}
	updatePixels();
}

function gradeintDescent()
{
	var alpha = 0.05;

	for(var i=0; i<data.length; i++)
	{
		var y = data[i].y;
		var x = data[i].x;
		var guess = m*x+b;
		var error = y-guess;
		m += alpha*error*x;
		b += alpha*error;
	}


}

function draw() {
	background(51);
	for(var i=0; i<data.length; i++)
	{
		var x = map(data[i].x,0,1,0,windowWidth);
		var y = map(data[i].y,0,1,windowHeight,0);
		ellipse(x,y,10,10);
	}

	if(data.length>1)
	{
		gradeintDescent();
		drawLine();
	}

}

function mousePressed()
{
	var x=map(mouseX,0,windowWidth,0,1);
	var y=map(mouseY,0,windowHeight,1,0);
	var point = createVector(x,y);
	data.push(point);
}
