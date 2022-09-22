const ask = () =>{
    //alert('Wasaaaaaa!');
    //leer pregunta
    const questionInput = document.getElementById("question");
    if(questionInput.value !==""){

    //recibir respuesta al preguntar a la bola mágica
    let answer = magicBall();
    //Imprimir resultado
    const answerInput = document.getElementById('answer');
    answerInput.value =answer;
}else{
    alert("A donde crées que vas >:( Preguntame algo :(");
    answerInput.value = "";
}
};

//Función Bola Mágica 
const magicBall = () =>{
    let randomNumber = Math.floor(Math.random()*8);
    let eightBall = '';
    switch(randomNumber){
        
        case 0:
            eightBall = 'Si';
            break;
        
        case 1:
            eightBall = 'No';
            break;
        
        case 2:
            eightBall = 'Talves';
            break;
        
        case 3:
            eightBall = 'Probablemente';
            break;
        case 4:
            eightBall = 'No lo se';
            break;                        
        case 5:
            eightBall = 'xD';
            break;
        case 6:
            eightBall = 'No se tu dimelo';
            break;
        case 7:
            eightBall = 'adios mi planeta me necesita';
            break;    
    }
    return eightBall;
;}
