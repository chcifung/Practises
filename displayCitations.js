function dsiplayCitations(){
	if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
	//取得所有引用
	var quotes=document.getElementsByTagName("blockquote");
	//遍历引用
	for(i=0;i<quotes.length;i++){
		//如果没有cite引用，继续循环
		if(!quotes[i].getAttribute("cite")){
			continue;
		}
		//保存cite属性
		var url=quotes[i].getAttribute("cite");
		//取得引用中的所有元素节点
		var quoteChildren=quotes[i].getElementsByTagName("*");
		if(quoteChildren.length<1) continue;
		var elem=quoteChildren[quoteChildren.length-1];
		//取得所有元素中的最后一个节点
		var link=document.createElement("a");
		//创建标记
		var link_text=document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript=document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
		//把标记添加到引用中的最后一个元素节点

	}
}
addLoadEvent(dsiplayCitations);