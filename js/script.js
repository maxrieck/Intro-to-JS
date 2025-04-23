


function changeColor1() {

    const reviewScore1 = document.getElementById("points1").innerText;

    if (reviewScore1 >= 65) {
        const changeGreen = document.getElementById("scoreBox1");
        changeGreen.style.backgroundColor = "rgb(61, 209, 93)";

        const changeGreen2 = document.getElementById("moviePic1");
        changeGreen2.style.backgroundColor = "rgb(61, 209, 93)";

    } else if (reviewScore1 >= 40) {
        const changeYellow = document.getElementById("scoreBox1");
        changeYellow.style.backgroundColor = "rgb(245, 209, 47)";

        const changeYellow2 = document.getElementById("moviePic1");
        changeYellow2.style.backgroundColor = "rgb(245, 209, 47)";

    } else {
        const changeRed = document.getElementById("scoreBox1");
        changeRed.style.backgroundColor = "rgb(240, 63, 86)";
        changeRed.style.color = "white";

        const changeRed2 = document.getElementById("moviePic1");
        changeRed2.style.backgroundColor = "rgb(240, 63, 86)";
    }
}


function changeColor2() {

    const reviewScore2 = document.getElementById("points2").innerText;

    if (reviewScore2 >= 65) {
        const changeGreen = document.getElementById("scoreBox2");
        changeGreen.style.backgroundColor = "rgb(61, 209, 93)";

        const changeGreen2 = document.getElementById("moviePic2");
        changeGreen2.style.backgroundColor = "rgb(61, 209, 93)";

    } else if (reviewScore2 >= 40) {
        const changeYellow = document.getElementById("scoreBox2");
        changeYellow.style.backgroundColor = "rgb(245, 209, 47)";

        const changeYellow2 = document.getElementById("moviePic2");
        changeYellow2.style.backgroundColor = "rgb(245, 209, 47)";

    } else {
        const changeRed = document.getElementById("scoreBox2");
        changeRed.style.backgroundColor = "rgb(240, 63, 86)";
        changeRed.style.color = "white";

        const changeRed2 = document.getElementById("moviePic2");
        changeRed2.style.backgroundColor = "rgb(240, 63, 86)";
    }
}


function changeColor3() {

    const reviewScore3 = document.getElementById("points3").innerText;

    if (reviewScore3 >= 65) {
        const changeGreen = document.getElementById("scoreBox3");
        changeGreen.style.backgroundColor = "rgb(61, 209, 93)";

        const changeGreen2 = document.getElementById("moviePic3");
        changeGreen2.style.backgroundColor = "rgb(61, 209, 93)";

    } else if (reviewScore3 >= 40) {
        const changeYellow = document.getElementById("scoreBox3");
        changeYellow.style.backgroundColor = "rgb(245, 209, 47)";

        const changeYellow2 = document.getElementById("moviePic3");
        changeYellow2.style.backgroundColor = "rgb(245, 209, 47)";

    } else {
        const changeRed = document.getElementById("scoreBox3");
        changeRed.style.backgroundColor = "rgb(240, 63, 86)";
        changeRed.style.color = "white";

        const changeRed2 = document.getElementById("moviePic3");
        changeRed2.style.backgroundColor = "rgb(240, 63, 86)";
    }
}

function changeColor4() {

    const reviewScore4 = document.getElementById("points4").innerText;

    if (reviewScore4 >= 65) {
        const changeGreen = document.getElementById("scoreBox4");
        changeGreen.style.backgroundColor = "rgb(61, 209, 93)";

        const changeGreen2 = document.getElementById("moviePic4");
        changeGreen2.style.backgroundColor = "rgb(61, 209, 93)";

    } else if (reviewScore4 >= 40) {
        const changeYellow = document.getElementById("scoreBox4");
        changeYellow.style.backgroundColor = "rgb(245, 209, 47)";

        const changeYellow2 = document.getElementById("moviePic4");
        changeYellow2.style.backgroundColor = "rgb(245, 209, 47)";

    } else {
        const changeRed = document.getElementById("scoreBox4");
        changeRed.style.backgroundColor = "rgb(240, 63, 86)";
        changeRed.style.color = "white";

        const changeRed2 = document.getElementById("moviePic4");
        changeRed2.style.backgroundColor = "rgb(240, 63, 86)";
    }
}


function changeColor5() {

    const reviewScore5 = document.getElementById("points5").innerText;
    
    if (reviewScore5 >= 65) {
        const changeGreen= document.getElementById("scoreBox5");
        changeGreen.style.backgroundColor="rgb(61, 209, 93)";
    
        const changeGreen2= document.getElementById("moviePic5");
        changeGreen2.style.backgroundColor="rgb(61, 209, 93)";
    
    } else if (reviewScore5 >= 40) {
        const changeYellow= document.getElementById("scoreBox5");
        changeYellow.style.backgroundColor="rgb(245, 209, 47)";
    
        const changeYellow2= document.getElementById("moviePic5");
        changeYellow2.style.backgroundColor="rgb(245, 209, 47)";
        
    } else {
        const changeRed= document.getElementById("scoreBox5");
        changeRed.style.backgroundColor="rgb(240, 63, 86)";
        changeRed.style.color="white";
    
        const changeRed2= document.getElementById("moviePic5");
        changeRed2.style.backgroundColor="rgb(240, 63, 86)";
    }}

    function changeColor6() {

        const reviewScore6 = document.getElementById("points6").innerText;
        
        if (reviewScore6 >= 65) {
            const changeGreen= document.getElementById("scoreBox6");
            changeGreen.style.backgroundColor="rgb(61, 209, 93)";
        
            const changeGreen2= document.getElementById("moviePic6");
            changeGreen2.style.backgroundColor="rgb(61, 209, 93)";
        
        } else if (reviewScore6 >= 40) {
            const changeYellow= document.getElementById("scoreBox6");
            changeYellow.style.backgroundColor="rgb(245, 209, 47)";
        
            const changeYellow2= document.getElementById("moviePic6");
            changeYellow2.style.backgroundColor="rgb(245, 209, 47)";
            
        } else {
            const changeRed= document.getElementById("scoreBox6");
            changeRed.style.backgroundColor="rgb(240, 63, 86)";
            changeRed.style.color="white";
        
            const changeRed2= document.getElementById("moviePic6");
            changeRed2.style.backgroundColor="rgb(240, 63, 86)";
        }}




console.log(changeColor1());
console.log(changeColor2());
console.log(changeColor3());
console.log(changeColor4());
console.log(changeColor5());
console.log(changeColor6());



function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }
  console.log(validateEmail("test@example.com"));



function submitUser() {
  const password= "password1234";
  const userPassword= document.getElementById("password").value;
  const errorMessage= document.getElementById("error-message");

  if (password !== userPassword) {
    errorMessage.textContent ="Incorrect username or password.";
    
  } else {
    errorMessage.textContent ="Login successful!";
  }
  }

