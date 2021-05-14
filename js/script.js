    const sliderBut = document.querySelector(".slider-controls-button") 
    const sliderbutCuttent = document.querySelector(".slider-controls-button--current");
    const sliderBut1 = document.querySelector(".slider-controls-button1");
    const sliderBut2 = document.querySelector(".slider-controls-button2");
    const sliderBut3 = document.querySelector(".slider-controls-button3");
    const slider = document.querySelector(".slider");
    const sliderArrowleft = document.querySelector(".slider-controls__arrow-left");
    const sliderArrowright = document.querySelector(".slider-controls__arrow-right")

    sliderBut2.addEventListener("click", function (evt){
        if (slider.classList.contains("slider-back1") || slider.classList.contains("slider-back3")){
          evt.preventDefault();
          slider.classList.remove("slider-back1");
          slider.classList.remove("slider-back3");
          slider.classList.add("slider-back2");
          sliderBut3.classList.remove("slider-controls-button--current");
          sliderBut1.classList.remove("slider-controls-button--current");
          sliderBut2.classList.add("slider-controls-button--current");
          sliderArrowleft.classList.remove("slider-controls__arrow--disabled");
          sliderArrowright.classList.remove("slider-controls__arrow--disabled");
          
        } 
       });
    
      sliderBut3.addEventListener("click", function (evt){
        if (slider.classList.contains("slider-back2") || slider.classList.contains("slider-back1")){
          evt.preventDefault();
          slider.classList.remove("slider-back1");
          slider.classList.remove("slider-back2");
          slider.classList.add("slider-back3");
          sliderBut2.classList.remove("slider-controls-button--current");
          sliderBut1.classList.remove("slider-controls-button--current");
          sliderBut3.classList.add("slider-controls-button--current");
          sliderArrowright.classList.add("slider-controls__arrow--disabled");
          sliderArrowleft.classList.remove("slider-controls__arrow--disabled");
        } });

        sliderBut1.addEventListener("click", function (evt){
          if (slider.classList.contains("slider-back2") || slider.classList.contains("slider-back3")){
            evt.preventDefault();
            slider.classList.remove("slider-back2");
            slider.classList.remove("slider-back3");
            slider.classList.add("slider-back1");
            sliderBut2.classList.remove("slider-controls-button--current");
            sliderBut3.classList.remove("slider-controls-button--current");
            sliderBut1.classList.add("slider-controls-button--current");
            sliderArrowleft.classList.add("slider-controls__arrow--disabled");
            sliderArrowright.classList.remove("slider-controls__arrow--disabled");
          } });
