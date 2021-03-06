function focusLabels() {
	if(!document.getElementsByTagName) return false;
	var labels=document.getElementsByTagName("label");
	for(var i=0;i<labels.length;i++){
		if(!labels[i].getAttribute("for")) continue;
		labels[i].onclick=function(){
			var id=this.getAttribute("for");
			if(!document.getElementById(id)) return false;
			var element=document.getElementById(id);
			element.focus();
		}
	}
}

function resetFields(whichform){
	if(Modernizr.input.placeholder) return;
	for(var i=0;i<whichform.elements.length;i++){
		var element=whichform.elements[i];
		if(element.type=="submit") continue;
		var check=element.placeholder||element.getAttribute("placeholder");
		if(!check) continue;
		element.onfocus=function(){
			var text=this.placeholder||this.getAttribute("placeholder");
			if(this.value==text){
				this.className="";
				this.value="";
			}
		}
		element.onblur=function(){
			if(this.value==""){
				this.className="placeholder";
				this.value=this.placeholder||this.getAttribute("placeholder");
			}
		}
		element.onblur();
	}
}

function prepareForms(){
	for(var i=0;i<document.forms.length;i++){
		var thisform=document.forms[i];
		resetFields(thisform);
		thisform.onsubmit=function(){
			if(!validateForm(this)) return false;
			var article=document.getElementsByTagName("article")[0];
			if(submitFormWithAjax(this,article)) return false;
			return true;
		}
	}
}

function isFilled(field){
	if(field.value.replace(" ","").length==0) return false;
	var placeholder=field.placeholder||field.getAttribute("placeholder");
	return (field.value!=placeholder);
}

function isEmail(field){
	return(field.value.indexOf("@")!=-1&&field.value.indexOf(".")!=-1);
}

function validateForm(whichform){
	for(var i=0;i<whichform.elements.length;i++){
		var element=whichform.elements[i];
		if(element.required=="required")
			if(!isFilled(element)){
				alert("Please fill the "+elements.name+" field.");
				return false;
			}
	}
	if(element.type=="email"){
		if(!isEmail(element)){
			alert("The "+element.name+" field must be a valid email address.");
			return false;
		}
	}
	return false;
}

function getHTTPObject(){
	if(typeof XMLHttpRequest == "undefined")
		XMLHttpRequest=function (){
			try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
				catch (e) {}
			try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
				catch (e) {}
			try {return new ActiveXObject("Msxml2.XMLHTTP");}
				catch (e) {}
			return false;
		}
		return new XMLHttpRequest();
}

function displayAjaxLoading(element){
	while(element.hasChildNodes()){
		element.removeChild(element.lastChild);
	}
	var content=document.createElement("img");
	content.setAttribute("src","images/loading.gif");
	content.setAttribute("alt","Loading");
	element.appendChild(content);
}

function submitFormWithAjax(whichform,thetarget){
	var request=getHTTPObject();
	if(!request){return false;}
	displayAjaxLoading(thetarget);
	var dataParts=[];
	var element;
	for(var i=0;i<whichform.elements.length;i++){
		element=whichform.elements[i];
		dataParts[i]=element.name+"="+encodeURIComponent(element.value);
	}
	var data=dataParts.join('&');
	request.open("POST",whichform.getAttribute("action"),true);
	request.setReuqestHeader("Content-type","application/x-www-form-urlencoded");

	request.onreadystatechange=function(){
		if(request.readyState==4){
			if(request.status==200||request.status==0){
			var matches=request.responseText.match(/<article>(\s\S)+<\/article>/);
			if(matches.length>0){
				thetarget.innerHTML=matches[1];
			}else{
				thetarget.innerHTML="<p>Oops, there was an error.sorry.</p>";
				}
			
		}else{
			thetarget.innerHTML="<p>"+request.statusText+"<p>";
		}
		}
	}
	request.send(data);
	return true;
}


addLoadEvent(focusLabels);
addLoadEvent(prepareForms);
addLoadEvent(validateForm);
addLoadEvent(getHTTPObject);
addLoadEvent(submitFormWithAjax);