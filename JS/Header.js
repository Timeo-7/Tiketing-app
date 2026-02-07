const DROP_BUTTON = document.querySelector(".Drop-button");

DROP_BUTTON.addEventListener("click", function(){

    const DROP_CONTENT = document.querySelector(".Drop-content");

    if( DROP_CONTENT.classList.contains("titanic")){

        DROP_CONTENT.classList.remove("titanic");
    }
    else{
        DROP_CONTENT.classList.add("titanic");
    }

});