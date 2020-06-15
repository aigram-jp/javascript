let intervalId = undefined

const clickStart=()=> {
    clearInterval( intervalId )
    move()
}

const move = ()=>{
    const dt = 0.05
    const e = 1.01
    let u = 1.0-Math.random()*2.0
    let v = 1.0-Math.random()*2.0
    let x = 0.5
    let y = 0.5

    coordinate( x, y )
    const nextStep = ()=>{
        x = x+u*dt
        y = y+v*dt
        
        if (x>1){
            x = 1-(x-1)
            u = -1*e*u
        } 
        if (x<0) {
            x = -x
            u = -1*e*u
        }
        if (y>1) {
            y = 1-(y-1)
            v = -1*e*v
        }
        if (y<0) {
            y = -y
            v = -1*e*v
        }
        coordinate( x,y )
    }

    intervalId = setInterval(nextStep, dt*1000)
}

const coordinate = (x,y)=>{
    const style = {
        position:"absolute",
        width:"20px",
        height:"20px",
        borderRadius:"50%",
        transform:"translate(-50%,-50%)",
        bottom: y*100 + "%",
        left: x*100 + "%",
        backgroundColor:"black"
    }

    for (item in style) {
        document.getElementById("ball").style[item]=style[item]
    }
}
