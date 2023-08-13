onload = () =>{
        document.body.classList.remove("container");
        var musik = "musik.mp3";
        var audio = document.querySelector(".audio");
        audio.src = musik; 
        audio.play();
};
