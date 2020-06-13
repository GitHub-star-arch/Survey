class Form {
    constructor(){
        this.input=createInput("name");
        this.greeting=createElement('h2');
        this.inpuut=createInput("email");
        this.question=createElement('h1',"Do you like the color red?");
        this.radio=createRadio();
        this.radio.option('yes');
        this.radio.option('no');
        this.radio.style('width', '60px');
        this.button=createButton("submit");
    }
    display(){
        var title = createElement('h2');
        title.html("Survey");
        title.position(displayWidth/2-40+0,0);
        this.button.mousePressed(()=>{
            player.index=player.index+1;
            player.radio1=this.radio.value();
            player.name=this.input.value();
            player.email=this.inpuut.value();
            player.updateCount(player.index);
            player.update();
        })

        this.input.position(displayWidth/2-40,displayHeight/2-270);
        this.inpuut.position(displayWidth/2-40,displayHeight/2-300);
        this.question.position(displayWidth/2-40,displayHeight/2-190);
        this.radio.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2-40,displayHeight/2+80);

    }
}