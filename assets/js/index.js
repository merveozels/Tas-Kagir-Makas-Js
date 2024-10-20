
let pcuWinScore = 0;
let playerWinScore = 0;

// oyuncu tasi secerse

playerTas.addEventListener('click', hesapla);

function hesapla (){
let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random()*3));
if (bilgisayarHamlesi == 'kağıt') {
    pcChooseRandom.innerHTML= 'Kağıt';
    pcuWinScore++;
    pcuWin.innerHTML = pcuWinScore;
    winner.innerHTML = 'Kazanan Bilgisayar';

} else if( bilgisayarHamlesi == 'makas') {
    pcChooseRandom.innerHTML= 'Makas';
    playerWinScore++;
    playerWin.innerHTML = playerWinScore;
    winner.innerHTML = 'Kazanan Oyuncu';
} else{
    winner.innerHTML = 'Berabere Kaldınız';
    pcChooseRandom.innerHTML= 'Taş';

}
}

// oyuncu makasi secerse
playerMakas.addEventListener('click', hesaplaMakas);

function hesaplaMakas(){
    let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random()*3));
        
    if (bilgisayarHamlesi == 'taş') {
        pcChooseRandom.innerHTML= 'Taş';
        pcuWinScore++;
        pcuWin.innerHTML = pcuWinScore;
        winner.innerHTML = 'Kazanan Bilgisayar'
    } else if( bilgisayarHamlesi == 'kağıt'){
        pcChooseRandom.innerHTML= 'Kağıt';
        playerWinScore++;
        playerWin.innerHTML = playerWinScore;
        winner.innerHTML = 'Kazanan Oyuncu';
    } else{
        winner.innerHTML = 'Berabere Kaldınız';
        pcChooseRandom.innerHTML= 'Makas';
    }
    }

    // oyuncu kagiti secerse
    playerKagit.addEventListener('click', hesaplaKagit);

function hesaplaKagit(){
    let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random()*3));
        
    if (bilgisayarHamlesi == 'makas') {
        pcChooseRandom.innerHTML= 'Makas';
        pcuWinScore++;
        pcuWin.innerHTML = pcuWinScore;
        winner.innerHTML = 'Kazanan Bilgisayar'
    } else if( bilgisayarHamlesi == 'Taş'){
        pcChooseRandom.innerHTML= 'Taş';
        playerWinScore++;
        playerWin.innerHTML = playerWinScore;
        winner.innerHTML = 'Kazanan Oyuncu';
    } else{
        winner.innerHTML = 'Berabere Kaldınız';
        pcChooseRandom.innerHTML= 'Makas';
    }
    }

    clearBtn.addEventListener('click', clearResults);

    function clearResults(){
        pcuWinScore=0;
        pcuWin.innerHTML = pcuWinScore;
        playerWinScore = 0;
        playerWin.innerHTML = playerWinScore;
    }