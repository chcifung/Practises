function prepareSideshow(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("linklist")) return false;

	var sideshow=document.createElement("div");
	sideshow.setAttribute("id","sideshow");

	var preview=document.createElement("img");
	preview.setAttribute("src","images/topics.gif");
	preview.setAttribute("alt","building blocks of web design");
	preview.setAttribute("id","preview");

	sideshow.appendChild(preview);

	var list=document.getElementById("linklist");
	insertAfter(sideshow,list);
	
	var links=document.getElementsByTagName("a");

	links[0].onmouseover=function(){
		moveElement("preview",-100,0,10);
	}

	links[1].onmouseover=function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover=function(){
		moveElement("preview",-300,0,10);
	}
}
addLoadEvent(prepareSideshow);