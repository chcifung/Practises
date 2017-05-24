var tick = "o";
var cross = "x";

var model = [];
var cells = [];

var flag;


//start a new game
function newGame(){
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			model[i][j] = 0;
			cells[i][j].text = " ";
		}
	}

	flag = 1;
}


//fresh the content of html
function freshView(){
	for(var i=0;i<3;j++){
		for(var j=0;j<3;j++){
			if(model[i][j]==1){
				cells[i][j]=cross;
			}else if(model[i][j]==2){
				cells[i][j]=tick;
			}
		}
	}
}

//check if the game over

function checkWin(x,y){
	//case one in x
	if(model[x][y]!=0&&model[1][y]==model[0][y]&&model[1][y]==model[2][y]){
		return 1;
	}


	//case two in y
	if(model[x][y]!=0&&model[x][1]==model[x][0]&&model[x][1]==model[x][2]){
		return 1;
	}

	//case three in right bottom
	if((x==0&&y==0)||(x==1&&y==1)||(x==2&&y==2)){
		if(model[x][y]!=0&&model[0][0]==model[1][1]&&model[1][1]==model[2][2]){
			return 1;
		}
	}

	//case four in left bottom
	if((x==2&&y==0)||(x==1&&y==1)||(x==0&&y==2){
		if(model[x][y]!=0&&model[2][0]==model[1][1]&&model[0][2]==model[1][1]){
			return 1;
		}
	}

	//default;
	return 0;
}