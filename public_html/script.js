var maindiv = document.getElementById("main");
maindiv.style.display = 'none';
var started = false;

var startTime;
var endTime;

var picArray = ["img/dog.png","img/cow.png","img/pig.png","img/cock.png","img/frog.png"];
var howManyPics = picArray.length;
var prevPic = Math.floor((Math.random() * howManyPics));
var questionmark = "img/questionmark.jpg";

var img1 = document.getElementById("win1");
var img2 = document.getElementById("win2");
var img3 = document.getElementById("win3");
var img4 = document.getElementById("win4");
var targetimage = document.getElementById("quest");

var images = [img1,img2,img3,img4];
console.log("how many pics:", howManyPics);
var selected1, selected2, selected3, selected4;
var targetimagenum = howManyPics + 1;

var imageClicked;
var won = false;

function changePicture (img) {
	var picIndex = randomPic(howManyPics);
	img.setAttribute("src",picArray[picIndex]);
	img.setAttribute("pic",picIndex);
	}
    
function drawPicture () {
	targetimagenum = randomPic(howManyPics);
	console.log(targetimagenum);
	targetimage.setAttribute("src",picArray[targetimagenum]);
	}

function randomPic (range){
	do {
		var i = Math.floor((Math.random() * range));
	}
	while (i==prevPic);
	prevPic=i;	
	return i;
	}


function checkWin(){
	var pic1 = img1.getAttribute("pic");
	var pic2 = img2.getAttribute("pic");
	var pic3 = img3.getAttribute("pic");
	var pic4 = img4.getAttribute("pic");
	 console.log(pic1,pic2,pic3,pic4);		
	if (pic1==pic2 && pic2==pic3 && pic3==pic4 && pic4==targetimagenum){
		console.log("won!");
		return true;
	}
}	

function celebrate(timeDiff) {
	console.log(timeDiff);
	alert("Gratulacje!!! Twój czas: " + timeDiff + " sek.");
}

function resetGame(){
	maindiv.style.display = 'none';
	var won = false;
	started = false;
	targetimage.setAttribute("src",questionmark);
	for (var i=0; i<images.length;i++){
		images[i].setAttribute("src",questionmark);
	}
}

for (var i=0; i<images.length;i++){
	var image = images[i];
	
	console.log("pentla");
	
	image.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
		if (checkWin()==true){
			endTime = new Date();
			var timeDiff = (endTime - startTime) / 1000;
			console.log(startTime);
			console.log(endTime);
			console.log(timeDiff);
			celebrate(timeDiff);	
			resetGame();
		}
	}; 
}

targetimage.onclick = function() {
            if (started==false){
            drawPicture(imageClicked);
            maindiv.style.display = 'block';
            started=true;
            startTime = new Date();
            console.log(startTime);
            }
            else {alert("Można wybrać tylko raz");
            };
	};




/*
img1.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
	if (checkWin()==true){
		celebrate();	
	}
};

img2.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
	if (checkWin()==true){
		celebrate();	
	}
};

img3.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
	if (checkWin()==true){
		celebrate();	
	}
};

img4.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
	if (checkWin()==true){
		celebrate();	
	}
};

* */


