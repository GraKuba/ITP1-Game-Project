/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(176,224,230); //fill the sky blue

	noStroke();
	fill(218,112,214);
	rect(0, 432, 1024, 144); //draw some green ground
	fill(186,85,211);
	rect(0, 504, 1024, 144);

	//1. a cloud in the sky
	fill(218,112,214)
	ellipse(120,105,50,50)
	ellipse(160,105,60,60)
	ellipse(190,105,50,50)
	fill(255)
	ellipse(115,99,50,50)
	ellipse(150,99,60,60)
	ellipse(185,99,50,50)

	//2. a mountain in the distance
	fill(169,169,169)
	triangle(260,433,550,433,700,70);
	fill(128,128,128)
	triangle(550,433,700,70,1100,433);
	fill(255)
	triangle(700,70,602,150,680,130);
	triangle(664,121,686,158,715,114);
	triangle(700,70,776,137,661,116);

	//3. a tree
	strokeWeight(5);
	noFill();
	stroke(255);
	beginShape();
	vertex(875,432);
	vertex(875,350);
	vertex(827,312);
	vertex(788,334);
	vertex(827,312);
	vertex(794,269);
	vertex(827,312);
	vertex(844,270);
	vertex(827,312);
	endShape();
	beginShape();
	vertex(875,350);
	vertex(903,303)
	endShape();
	noStroke();
	fill(218,112,214);
	ellipse(785,335,20,20);
	ellipse(794,271,20,20);
	ellipse(843,271,20,20);
	ellipse(904,301,20,20);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	fill(153,50,204);
	rect(50, 504, 150, 144);
	triangle(50, 504,200,504,240,433);

	//5. a collectable token - eg. a jewel, fruit, coins
	fill(255,165,0);
	ellipse(435,445,50,50);
	fill(255);
	ellipse(435,445,10,10);
	fill(255,140,0)
	ellipse(450,445,10,20);
	ellipse(420,445,10,20);
	ellipse(435,460,20,10);
	ellipse(435,430,20,10);

	//A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
