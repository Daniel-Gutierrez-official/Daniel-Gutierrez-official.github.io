var eddieCount = {value: 1};
var santiCount = {value: 1};


function playEddie(){
    let numSounds = 2;

    if(eddieCount.value > numSounds)
        eddieCount.value = 1;

    switch(eddieCount.value){
        case 1:
            var hee =new Audio();
            hee.src = "Eddie/sounds/hee.wav"
            hee.play();
            eddieCount.value++;
            break;

        case 2:
            var si =new Audio();
            si.src = "Eddie/sounds/si.wav"
            si.play();
            eddieCount.value++;
            break;
        }

}


function playSanti(){
let numSounds = 1;

if(santiCount.value > numSounds)
    santiCount.value = 1;

switch(santiCount.value){
    case 1:
        var er = new Audio();
        er.src = "Santi/sounds/er.wav" 
        er.play();
        santiCount.value++;
        break;
    }

}