window.onload = function(){
	//获取id
	var lb =document.getElementById("lunbo");
	var divs = lb.getElementsByTagName("div");
	var lis = lb.getElementsByTagName("li")
	//声明控制变量
	var lba = 0;
	//运动函数
	function lunbo(){
		lba++;
		if(lba==8){
			lba=0;
		}
		//让lba号div显示,lba号li变色
		for(var i=0;i<divs.length;i++){
			divs[i].style.display = "none";
			lis[i].style.background = "#c5c1c0";
		}
		divs[lba].style.display = "block";
		lis[lba].style.background = "#4372c1";
	}
	//循环
	var round = setInterval(lunbo,2000);
	//给li加事件
	for (var i=0;i<lis.length;i++){
		lis[i].xuhao = i;
		//移入事件
		lis[i].onmouseover = function(){
			lba = this.xuhao;
			console.log(lba);
			clearInterval(round);
			//this.xuhao对应的图片显示
			for(var i=0;i<divs.length;i++){
				divs[i].style.display = "none";
				lis[i].style.background = "#c5c1c0";
			}
			divs[lba].style.display = "block";
			lis[lba].style.background = "#4372c1";		
		}
		//移出事件
		lis[i].onmouseout = function(){
			round = setInterval(lunbo,2000);
		}
	}
	
	//左右按钮事件
	var aleft = document.getElementById("aleft");
	var aright = document.getElementById("aright");
	
		//移入移出事件
	aleft.onmouseover = function (){
		clearInterval(round);
	}
	aleft.onmouseout = function(){
		round = setInterval(lunbo,2000);
	}
	aright.onmouseover = function (){
		clearInterval(round);
	}
	aright.onmouseout = function(){
		round = setInterval(lunbo,2000);
	}
		//点击事件
	aleft.onclick = function (){
		if(lba == 0){
			lba = 7;
			divs[0].style.display = "none";
			lis[0].style.background = "#c5c1c0";
			divs[7].style.display = "block";
			lis[7].style.background = "#4372c1";
		} else {
		divs[lba].style.display = "none";
		lis[lba].style.background = "#c5c1c0";
		divs[lba-1].style.display = "block";
		lis[lba-1].style.background = "#4372c1";	
		lba--;	
		}			
	}

	aright.onclick = function (){
		if(lba == 7){
			lba = 0;
			divs[7].style.display = "none";
			lis[7].style.background = "#c5c1c0";
			divs[0].style.display = "block";
			lis[0].style.background = "#4372c1";
		} else {		
		divs[lba].style.display = "none";
		lis[lba].style.background = "#c5c1c0";
		divs[lba+1].style.display = "block";
		lis[lba+1].style.background = "#4372c1";	
		lba++;
		}
	}
}
