function randomGenerator(){
    var randomNumber1 = Math.random()
    randomNumber1 = randomNumber1*6
    randomNumber1 = Math.floor(randomNumber1)+1
    return randomNumber1;
}

var imge1 = randomGenerator();
var imge2 = randomGenerator();
document.querySelector(".img1").setAttribute("src","dice"+imge1+".png");
document.querySelector(".img2").setAttribute("src","dice"+imge2+".png");

if(imge1>imge2)
{
    document.querySelector("h1").innerHTML="player 1 won"
}
else if(imge1<imge2)
{
    document.querySelector("h1").innerHTML="player 2 won"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}