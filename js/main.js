// JavaScript Document
window.onload=function(){
	var a=document.getElementById("list1");
	a.onmouseover=function(){
		var c=document.getElementsByClassName("jpg_big")[0];
		var d=c.getElementsByTagName("img")[0];
		d.setAttribute("src","images/q1.jpg");
		}
		var a=document.getElementById("list2");
	a.onmouseover=function(){
		var c=document.getElementsByClassName("jpg_big")[0];
		var d=c.getElementsByTagName("img")[0];
		d.setAttribute("src","images/q2.jpg");
		}
			var a=document.getElementById("list3");
	a.onmouseover=function(){
		var c=document.getElementsByClassName("jpg_big")[0];
		var d=c.getElementsByTagName("img")[0];
		d.setAttribute("src","images/q3.jpg");
		}
			var a=document.getElementById("list4");
	a.onmouseover=function(){
		var c=document.getElementsByClassName("jpg_big")[0];
		var d=c.getElementsByTagName("img")[0];
		d.setAttribute("src","images/q4.jpeg");
		}
			var a=document.getElementById("list5");
	a.onmouseover=function(){
		var c=document.getElementsByClassName("jpg_big")[0];
		var d=c.getElementsByTagName("img")[0];
		d.setAttribute("src","images/q5.jpg");
		}
		
		/*--------轮播图--------*/
		var zz=0;
	var z=document.getElementsByClassName("ar")[0];
	z.onclick=function(){
	if(zz==0){
		z.style.background="url(file:///D|/eclipse/Adobe%20Fireworks%20CS6/Demo/1.Demo/quansheng/images/sq.png)no-repeat 660px center";
		zz=1;
	}else{
		z.style.background="url(file:///D|/eclipse/Adobe%20Fireworks%20CS6/Demo/1.Demo/quansheng/images/zk.png)no-repeat 660px center";
		zz=0;
		}
		}
	/*--------展开更多箭头---------*/	
		
		var l=document.getElementsByClassName("sh");
		for(var x=0;x<l.length;x++){
			l[x].onmouseover=function(){
					var ab=this.lastChild;
					ab.style.display="block";
				}
			l[x].onmouseout=function(){
					var ab=this.lastChild;
					ab.style.display="none";
				}
			}
		
		
		
		
		
		
		
		
		
	}/*---结束---*/