const inputs = document.querySelectorAll("#create-box>input")
const loader = document.querySelector("#loader")




for (let i = 0; i < inputs.length; i++) {
    
    inputs[i].addEventListener("input",(e)=>{

        let counter = 0
        console.log(counter);
        
        for (let j = 0; j < inputs.length; j++) {
            
            if (inputs[j].value!=="") {
                counter++
            }

        }
        console.log(counter);
        switch (counter) {
            case 0:
                loader.style.width = "0%"
                break;
        
            case 1:
                loader.style.width = "33%"
                break;
        
            case 2:
                loader.style.width = "66%"
                break;
        
            case 3:
                loader.style.width = "100%"
                break;
        
            default:
                break;
        }


    })


}








