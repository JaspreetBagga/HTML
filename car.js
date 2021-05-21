var m=0;
var y;
function start(){
    clearInterval(y);
    y=setInterval(run,100);   
}
function run(){
    if(m==1050){
        clearInterval(y);
        m=0;
    }
    else{
        m+=10;
        document.getElementById("img").style.marginLeft=m+'px';
    }
}
function stop(){
    clearInterval(y);
}