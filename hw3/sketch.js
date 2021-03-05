
  //make array names plural bc they hold multiple values
  var step;
  var colorSlider1;
  var colorSlider2;
  var opacitySlider;
  var bubbles = [];
  var button;
  var doingAnimation = true;


  
  function setup() {
    createCanvas(1000, 1000);

    step=50;

    colorSlider1 = createSlider(200,255,200, 10);

    colorSlider2 = createSlider(200,255,200,10);
    opacitySlider = createSlider(87,197,87,10);



    //make button to start and stop
    button = select('button');
    button.mousePressed(startStopAnimation);
  
    for (var i=(1.25*step); i<(width-step); i+=step){
      for (var j=(1.25*step); j<(height-step); j+=step){
        bubbles.push(new Shape(i+(step/2),j+2, i+2, j+(step/2)));
       
      } 
    
    }
  }

  function startStopAnimation() {
    doingAnimation = !doingAnimation;
  }
  
  function draw() {
    background(0);

    for(var x=step;x<width;x+=step){
      for (var y=step; y<height; y+=step){
        fill(255);
        circle(x, y, 50);
      }
    }
    
    for(var i=0; i<bubbles.length; i++){
      
      if (doingAnimation){
        bubbles[i].move();
        //call the motion of the bubbles
      }
      bubbles[i].render();
      
    }

  }

  class Shape{
    constructor (x1,y1,x2,y2){
      this.circle1x=x1;
      this.circle1y=y1;
      this.circle2x=x2;
      this.circle2y=y2;
      this.rad=step;
    }

    render(){
       fill((colorSlider1.value()), 255,0,(opacitySlider.value()));
        circle(this.circle1x, this.circle1y,this.rad);
        fill(255, 0,(colorSlider2.value()), (opacitySlider.value()));
        circle(this.circle2x, this.circle2y,this.rad);
    }

   
    move(){ //make another function to move
      this.circle1x +=random(-1, 1);
      this.circle1y +=random(-1, 1);
      this.circle2x +=random(-1, 1);
      this.circle2y +=random(-1, 1);
    }
  
  }
  
    
  

