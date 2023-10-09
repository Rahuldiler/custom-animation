document.addEventListener("DOMContentLoaded", function () {
  const centerImage = document.querySelector(".center-image");
  const framerWrap = document.querySelector(".frame");
  const partyBox = document.querySelector(".party_box");
  const GiftHeading = document.querySelector(".gift_heading");
  const ButtonAnimate = document.querySelector(".button_animate");
  const CircleAnimation = document.querySelector(".circle-animation");
  const CircleAnimation2 = document.querySelector(".circle-animation-2");
  const Footer = document.querySelector(".footer");
  const Hello = document.querySelector(".hello");
  const Hello2 = document.querySelector(".hello2");
  const GiftReady = document.querySelector(".gift_ready");

  // const myButton = document.getElementById("myButton");
  setTimeout(() => {
    centerImage.classList.add("center-image-move");
    centerImage.classList.add("box");
    centerImage.src = "./image/Frame.svg";
  }, 2000);


  // Add this setTimeout block to customize ButtonAnimate style for mobile
  if (window.innerWidth < 768) {
    setTimeout(() => {
      partyBox.src = "./image/party-box (2).svg";
      framerWrap.style.position = "unset";
      centerImage.style.position = "absolute";
      centerImage.style.top = "40px";
      centerImage.style.left = "100px";
      centerImage.style.maxWidth = "150px";

      partyBox.style.transition = "top 0.8s ease-in-out, left 0.9s ease-in-out, transform 0.9s ease-in-out";
      partyBox.style.position = "absolute";
      partyBox.style.top = "30%";
      partyBox.style.left = "50%";
      partyBox.style.transform = "translate(-50%, -50%)";
    }, 5000);
  } else {
    setTimeout(() => {
      partyBox.src = "./image/party-box (2).svg";
      framerWrap.style.position = "unset";
      centerImage.style.position = "absolute";
      centerImage.style.top = "80px";
      centerImage.style.left = "200px";
      centerImage.style.maxWidth = "250px";

      partyBox.style.transition = "top 0.8s ease-in-out, left 0.9s ease-in-out, transform 0.9s ease-in-out";
      partyBox.style.position = "absolute";
      partyBox.style.top = "30%";
      partyBox.style.left = "50%";
      partyBox.style.transform = "translate(-50%, -50%)";

    }, 5000);
  }


  setTimeout(() => {
    partyBox.src = "./image/party-box (1).svg";
    partyBox.style.top = "30%";
    partyBox.style.left = "50%";
    partyBox.style.transform = "translate(-50%, -50%)";
    partyBox.style.animation = "zoomInOut 2s ease-in-out 1";
    GiftHeading.style.color = ("#fff");


  }, 6000);

  setTimeout(() => {
    GiftHeading.classList.add("gift_heading_animation");
    ButtonAnimate.classList.add("button_animation");

  }, 8000);




  // Add this setTimeout block to customize ButtonAnimate style for mobile
  if (window.innerWidth < 768) {
    setTimeout(() => {
      GiftHeading.style.top = "33%";
    }, 9000);
  } else {
    setTimeout(() => {
      GiftHeading.style.top = "30%";
      GiftHeading.style.left = "50%";
      GiftHeading.style.transform = "translate(-50%, -50%)";
      GiftHeading.style.animation = "headingAnimation 2s ease-in-out 1";
  
      partyBox.style.top = "70%";
      partyBox.style.left = "50%";
      partyBox.style.transform = "translate(-50%, -50%)";
      partyBox.style.animation = "partyAnimation 2s ease-in-out 1";
  
      // Add the button animation class to the inner div of the button_animate anchor tag
      const buttonDiv = document.querySelector(".button_animate .button_animation");
      buttonDiv.style.backgroundImage = 'url("./btn.svg")';
    }, 9000);
  }
  

  setTimeout(() => {

    partyBox.src = "./image/party-box (2).svg";
    partyBox.style.animation = "partyAnimation-2 1.5s ease-in-out 1";
    partyBox.style.top = "55%";
    partyBox.style.left = "50%";
    partyBox.style.transform = "translate(-50%, -50%)";


  }, 11000);

  // Add this setTimeout block to customize ButtonAnimate style for mobile
  if (window.innerWidth < 768) {
    setTimeout(() => {
      GiftHeading.style.color = ("#000");
      ButtonAnimate.style.top = "75%";
      ButtonAnimate.style.left = "50%";
      ButtonAnimate.style.transform = "translate(-50%, -50%)";
      // ButtonAnimate.style.transition = "top 0.3s ease-in-out, left 0.2s ease-in-out, transform 0.5s ease-in-out";
      Footer.classList.add("footer_animation")



    }, 12000);
  } else {
    setTimeout(() => {
      GiftHeading.style.color = ("#000");
      ButtonAnimate.style.top = "80%";
      ButtonAnimate.style.left = "50%";
      ButtonAnimate.style.transform = "translate(-50%, -50%)";
      // ButtonAnimate.style.transition = "top 0.6s ease-in-out, left 0.5s ease-in-out, transform 0.9s ease-in-out";
      CircleAnimation2.classList.remove('circle-animation-2');
      Footer.classList.add("footer_animation")

    }, 12000);
  }



  
  
  // Add this setTimeout block to customize ButtonAnimate style for mobile
  if (window.innerWidth < 768) {
    setTimeout(() => {
    



    }, 2000);
  } else {
    setTimeout(() => {
      Hello2.classList.add("form_circle_animation");
        GiftReady.src = "./image/gift-ready.svg";
        GiftReady.style.width="360px"
        GiftReady.style.transition = "0.3s ease-in-out"
      Footer.classList.add("footer_animation")

    }, 2000);
  }



  
  const kingButton = document.getElementById("king");
  kingButton.addEventListener("click", changeColor);

  const returnKingButton = document.getElementById("return_king");
  returnKingButton.addEventListener("click", changeColor2);

  const king2Button = document.getElementById("king2");
  king2Button.addEventListener("click", changeColor3);

  function changeColor() {
    Hello2.classList.remove('form_circle_animation');

    Hello.classList.remove('form_animation');
    Hello.classList.add('form_circle_animation_2');
  }

  function changeColor2() {
    Hello2.classList.remove('form_animation');
    Hello.classList.remove('form_circle_animation_2');
    Hello.classList.add('form_animation_2');
  }

  function changeColor3() {
    Hello.classList.remove('form_animation_2');
    Hello.classList.remove('form_animation');
    Hello.classList.add('form_animation');
  }

});


