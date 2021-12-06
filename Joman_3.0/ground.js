class Ground{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        let options ={
            isStatic:true
        }
        this.image = loadImage("./assets/ground.png");
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        //this.invisble = createSprite(x,y+10,w,h);
        //this.body.addImage(this.image);
        //this.body.velocityX = -5; 
        //this.invisble.velocityX = -5;
        //this.body.scale = 0.5;
        //platformGroup.add(this.body);
        //jumpGroup.add(this.invisble);
        console.log(this.body);
        
    }
    show() {
        //let pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y, this.w, this.h);
        pop();
    }

    moving(){
        this.x -= 5;
        console.log(this.x);
    }
}