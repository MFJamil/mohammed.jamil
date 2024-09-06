

import {Raster} from './Raster.js'


const config = {        };
const raster = new Raster();
let fps = 60;
let prevTime = -1;


let animatRef = 1;

window.addEventListener('load',()=>{

    console.log(" Loading the page  ................................");
    const cont = document.getElementById('container');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    config.ct = ctx;
    config.color1 = '#005A8C';
    config.color2 = '#B7F9AA';
    config.blockSize = 16;
    config.policy = "fixed";
    config.drawRight = true;
    config.startDraw = cont.clientWidth * 0.2;
    //config.endDraw = cont.clientWidth;
    console.log("cont.clientWidth : " + cont.clientWidth);
    console.log("cont.clientHeight : " + cont.clientHeight);
    canvas.setAttribute('width', cont.clientWidth + "px");
    canvas.setAttribute('height', cont.clientHeight + "px");
    document.getElementById('height').value = cont.clientHeight;
    document.getElementById('width').value = cont.clientWidth;
    config.width = cont.clientWidth;
    config.height = cont.clientHeight;
    raster.draw(config);

    /*
    
    class Game {
        constructor(width,height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update(){
            this.player.update(this.input.keys);
        }
        draw(context){
            this.player.draw(context);
        }
    }
    const game = new Game(canvas.width,canvas.height);
    console.log(game);

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
    */
})



export function removeRight(removeFlag){
    console.log("REMOVE RIGHT : " + removeFlag.checked);
    config.drawRight = removeFlag.checked;
    raster.draw(config);

    
}
export function textChange(data){
    const cont = document.getElementById('container');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,config.width,config.height);

    console.log("Got Data Change : " + data.value + " , holding type : " + typeof data.value);
    console.dir(data);
    config[data.name] = ['number','range'].indexOf(data.type)!==-1?data.valueAsNumber:data.value;
    
    if ((data.name==='width')||(data.name==='height')){
        canvas.style[data.name] = data.value;
        canvas.setAttribute('width', config.width + "px");
        canvas.setAttribute('height', config.height + "px");
        cont.style.width = config.width + "px";
        cont.style.height = config.height + "px";
    }
    if (data.name==='start'){
        config.startDraw = config.width * (data.valueAsNumber/100);
    }
    raster.draw(config);
}


export function dataChange(data){
    const cont = document.getElementById('container');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,config.width,config.height);

    console.log("Got Data Change : " + data.value + " , holding type : " + typeof data.value);
    console.dir(data);
    config[data.name] = ['number','range'].indexOf(data.type)!==-1?data.valueAsNumber:data.value;
    
    if ((data.name==='width')||(data.name==='height')){
        canvas.style[data.name] = data.value;
        canvas.setAttribute('width', config.width + "px");
        canvas.setAttribute('height', config.height + "px");
        cont.style.width = config.width + "px";
        cont.style.height = config.height + "px";
    }
    if (data.name==='start'){
        config.startDraw = config.width * (data.valueAsNumber/100);
    }
    raster.draw(config);
}

function animateNext(timeStamp){
    //console.log("...... " + timeStamp);
    if (prevTime===-1){
        prevTime = timeStamp;
    }

    let timeDiff = 1000/fps;
    if ((timeStamp-prevTime)>=timeDiff){
        config.startDraw = config.start;
        raster.draw(config);
        if (config.start>=config.width){
            cancelAnimationFrame(animatRef);
        } else{
            config.start = config.start + (2*config.blockSize);
        }
    }
    if (config.start<=config.width){
        prevTime = timeStamp;
        animatRef = requestAnimationFrame(animateNext)
    }
    //console.log(`config.start (${config.start}) -- config.width (${config.width}) `)

}

export function doAnimate(always=false){
    if (always) raster.doAnimateAlways(config);
    else raster.doAnimateOnce(config);
    
    /*
    console.log("Animate is called ....");
    config.start = 1;
    const cont = document.getElementById('container');
    config.width = cont.clientWidth;
    config.height = cont.clientHeight;
    
    animatRef = requestAnimationFrame(animateNext);

    let ref = setInterval(() => {
        
        animateStart ++;        
        if (animateStart>=100) clearInterval(ref);
    },(100));
    */
    
}




