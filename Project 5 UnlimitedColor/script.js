// generating rangom colors

const randomcolor = function () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    let intervalid ;
        const startChaningColors = function () {
        
        if (!intervalid) {
            intervalid = setInterval(changeColor, 1000);
        }
        function changeColor() {
            document.body.style.backgroundColor = randomcolor();
        }
        
    };
    const stopChaningColors = function () {
        clearInterval(intervalid);
        intervalid = null;
        

    };
    document.querySelector("#start").addEventListener("click", startChaningColors)
    document.querySelector("#stop").addEventListener("click", stopChaningColors);