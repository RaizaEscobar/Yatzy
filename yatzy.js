function throwDieces(){
    const dieces = document.getElementsByClassName("diece");
    for (let i = 0; i < dieces.length; i++) {
        dieces[i].src = generateRandomPath();    
    }
}

function generateRandomPath(){
    let random = Math.floor(Math.random() * 6) + 1;         
    return `Img/dado${random}.png`;  
}

function selectDiece(img){
    img.className += " selected";
}

