function Bullet(){this.ele=document.createElement("div"),this.id=1e6*Math.random()+"",this.init=function(){return gameEngine.allBullets[this.id]=this,this.ele.className="bullet",gameEngine.ele.appendChild(this.ele),this.ele.style.left=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2-this.ele.offsetWidth/2+"px",this.ele.style.top=myPlane.ele.offsetTop-this.ele.offsetHeight+"px",this},this.move=function(){var e=this;this.timer=setInterval(function(){var t=e.ele.offsetTop-10;t<-18?(clearInterval(e.timer),gameEngine.ele.removeChild(e.ele),delete gameEngine.allBullets[e.id]):e.ele.style.top=t+"px"},30)},this.boom=function(){clearInterval(this.timer),this.ele.className="bullet-die";var e=["images2/die1.png","images2/die2.png"],t=0,l=this,i=setInterval(function(){t>=1?(clearInterval(i),gameEngine.ele.removeChild(l.ele)):l.ele.style.background="url("+e[++t]+") no-repeat"},100)}}