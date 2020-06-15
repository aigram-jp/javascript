
let count = 0

const clickCount=()=> {
    count = count+1
    changeTitle( "GAME START: " + count )
}

const changeTitle = (moji)=>{
    document.getElementById("button-text").innerHTML = moji
}
