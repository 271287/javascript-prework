function playGame(){

    function clearMessages(){
    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        }else if(argMoveId == 2){
            return 'papier';
        }else(argMoveId == 3){
            return 'nożyce';
        }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Koputer wygrywa!');
        }else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        }else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Komputer wygrywa!');
        }else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){s
            printMessage('Ty wygrywasz!');
        }else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Komputer wygrywa!');
        }else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
        }else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        }else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        }else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
            printMessage('Komputer wygrywa!');
        }else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
            printMessage('Komputer wygrywa!');
        }else( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
            printMessage('Komputer wygrywa!');



    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);
  
    let computerMove = getMoveName(randomNumber);
  
    /*if(randomNumber == 1){
        computerMove = 'kamień';
    }else if(randomNumber == 2){
        computerMove = 'papier';
    }else(randomNumber == 3){
        computerMove = 'nożyce';
    }*/
  
    printMessage('Mój ruch to: ' + computerMove);
  
    printMessage('Twój ruch to: ' + playerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/playGame(3);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(randomNumber);

    /*if(playerInput == '1'){
        playerMove = 'kamień'; 
    }else if(playerInput == '2')
        playerMove = 'papier';
    }else(playerInput == '3')
        playerMove = 'nożyce';
    }*/

    printMessage('Twój ruch to: ' + playerMove);

    document.getElementById('play-rock').addEventListener('click', function(){
        printMessage('Guzik został kliknięty');
    });
    document.getElementById('play-paper').addEventListener('click', function(){
        printMessage('Guzik został kliknięty');
    });  
    document.getElementById('play-scissors').addEventListener('click', function(){
        printMessage('Guzik został kliknięty');
    });
    }
}
