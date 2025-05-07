var dinoCount = {value: 1};


function playDino(){
    let numSounds = 2;

    if(dinoCount.value > numSounds){
        dinoCount.value = 1;
    }

    switch(dinoCount.value){
        case 1:
            var roar =new Audio();
            roar.src = "roar.wav"
            roar.play();
            dinoCount.value++;
            break;
    }

}