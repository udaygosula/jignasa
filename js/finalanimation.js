var canvas;
var ctx;
var MaxCircles = 175;
var particles = [];


function main(){ 
    canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
    var frame = function(){
		draw();
		update();
	window.requestAnimationFrame(frame,canvas);
		 
	};
	window.requestAnimationFrame(frame,canvas);  
}


function Circles(x,y,xSpeed,ySpeedS){
	this.radius = 0.80;//15;
//	rad = this.radius;
	circlePos();
	this.x = circleX; 
	this.y = circleY; 
	this.xSpeed = (Math.random() - Math.random()); //2
    this.ySpeed = (Math.random() - Math.random()); //2
	this.color = '#D80000';
} 

main();

function circlePos(){
	circleX = (canvas.width-2)*Math.random();//+rad;
	circleY = (canvas.height-2)*Math.random();//+rad;
}

for(i=1; i<MaxCircles; i++){
	particles[i] = new Circles();
}

particles[0] = {};

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawCircles();
}


function update(){
	updateCircles();
}




function updateCircles(){
	for(i=1; i<particles.length; i++){
		particles[i].x += particles[i].xSpeed;
		particles[i].y += particles[i].ySpeed;
		
		if(particles[i].x + particles[i].radius > canvas.width ){  // if the x component of particle makes it leave the canvas
			particles[i].x = canvas.width - particles[i].radius;   // puts particle within canvas
			particles[i].xSpeed =-particles[i].xSpeed; // reverses x component of speed of Atom
        }
        if(particles[i].x < particles[i].radius){
			particles[i].x = particles[i].radius;
			particles[i].xSpeed =-particles[i].xSpeed;
		}
        if(particles[i].y  + particles[i].radius > canvas.height){
			particles[i].y = canvas.height - particles[i].radius;
			particles[i].ySpeed =-particles[i].ySpeed;
        }
        if(particles[i].y < particles[i].radius){
			particles[i].y = particles[i].radius;
			particles[i].ySpeed =-particles[i].ySpeed;
        } 
	}
}


function drawCircles(){
	for(i=0; i<particles.length; i++){		
	    ctx.beginPath();
		ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, 2 * Math.PI, false);		
     	ctx.fill();
		ctx.stroke();
		ctx.fillStyle = 'white';
		
		for(j=0; j<particles.length; j++){
		    var dis = Math.sqrt(Math.pow((particles[j].x - particles[i].x),2) +  Math.pow((particles[j].y - particles[i].y),2));
		
			if(dis<100){
			
			var width;
						
			if( 1 > 200/(dis*dis) ){
			   width = 200/(dis*dis);
			}else{
			   width = 0.75;
			}
			ctx.beginPath();
			ctx.moveTo(particles[i].x,particles[i].y);
			ctx.lineTo(particles[j].x, particles[j].y);
			ctx.strokeStyle = 'white';
			ctx.lineWidth = width;
			ctx.stroke();
			}
		}
	}	
}  

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
}
 
canvas.addEventListener('mousemove', function(evt){
	var mousePos = getMousePos(canvas, evt);
	particles[0] = {
		radius:0.5,
		x: mousePos.x,
		y: mousePos.y
	}		
}, false);

 
   
canvas.addEventListener('click', function(evt){
	var mousePos = getMousePos(canvas, evt);		   
	   particles.push({
			radius:0.75,
			x: mousePos.x,
			y: mousePos.y,
			xSpeed:(Math.random() - Math.random()),
			ySpeed:(Math.random() - Math.random())
		},{radius:0.75,
			x: mousePos.x,
			y: mousePos.y,
			xSpeed:(Math.random() - Math.random()),
			ySpeed:(Math.random() - Math.random())
		},{radius:0.75,
			x: mousePos.x,
			y: mousePos.y,
			xSpeed:(Math.random() - Math.random()),
			ySpeed:(Math.random() - Math.random())
		},{radius:0.75,
			x: mousePos.x,
			y: mousePos.y,
			xSpeed:(Math.random() - Math.random()),
			ySpeed:(Math.random() - Math.random())
		});
		
}, false);