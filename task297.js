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