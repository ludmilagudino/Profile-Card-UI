const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(bnt){

    bnt.addEventListener("click", function(e){

        const color = e.currentTarget.classList;
        
        if(color.contains("btn1")){
            theme.style.setProperty("--theme-color", "#D6A992");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "#D097F3");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "#b79ced");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "#957fef");
        }
        else{
            theme.style.setProperty("--theme-color", "#7161ef");
        }
    });
});