window.onresize = function ajustWinSize2(){
	var width=window.innerWidth-225;
	var height=window.innerHeight-55;
	document.getElementById("contentWrapper").style.width=width+"px";
	document.getElementById("contentWrapper").style.height=height+"px";

	var top=window.innerHeight-238;
	var left=5;
	if(top<246){
		top=246;
	}
	document.getElementById("icon").style.top=top+"px";
	document.getElementById("icon").style.left=left+"px";

	top=window.innerHeight-274;
	left=5;
	if(top<210){
		top=210;
	}
	document.getElementById("cInfo").style.top=top+"px";
	document.getElementById("cInfo").style.left=left+"px";
}

window.onload = function initializeContent(){
	var width=window.innerWidth-225;
	var height=window.innerHeight-55;
	document.getElementById("contentWrapper").style.width=width+"px";
	document.getElementById("contentWrapper").style.height=height+"px";
	
	var top=window.innerHeight-238;
	var left=5;
	if(top<246){
		top=246;
	}
	document.getElementById("icon").style.top=top+"px";
	document.getElementById("icon").style.left=left+"px";

	top=window.innerHeight-274;
	left=5;
	if(top<210){
		top=210;
	}
	document.getElementById("cInfo").style.top=top+"px";
	document.getElementById("cInfo").style.left=left+"px";

	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("home").style.left=($("#home").offset().left+1)+"px";
			document.getElementById("contentWrapper").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","pages/home.html",true);
	xmlhttp.send();
}

var currentPage="home";

function changePage(switchTo){
	$('#contentWrapper').fadeOut('fast',function(){
		var xmlhttp;
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				document.getElementById(currentPage).style.left=($("#"+currentPage).offset().left-21)+"px";
				document.getElementById(switchTo).style.left=($("#"+switchTo).offset().left+1)+"px";
				document.getElementById("contentWrapper").innerHTML=xmlhttp.responseText;
				$('#contentWrapper').fadeIn('fast');
				currentPage=switchTo;
			}
		}
		xmlhttp.open("GET","pages/"+switchTo+".html",true);
		xmlhttp.send();
		}
	);
}

var timer=null;

function slideLinkRight(whichLink){
	document.getElementById(whichLink).style.left=($("#"+whichLink).offset().left+1)+"px";
}

function slideLinkLeft(whichLink){
	document.getElementById(whichLink).style.left=($("#"+whichLink).offset().left-21)+"px";
}

function highLiteHeader(on){
	if(on==true){
		document.getElementById("headerText").style.textShadow="0px 0px 15px rgba(255,255,255,0.7)";
	}
	else{
		document.getElementById("headerText").style.textShadow="0px 1px 3px rgba(255,255,255,0.5)";

	}
}