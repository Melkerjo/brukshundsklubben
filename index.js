// Här startar funktionen för bildspelet
function changeImage(numberOfImages, timer) {
    let imageNumber = numberOfImages;


    function updateImage() {
        

        changeImageId.style.opacity = 1;
            changeImageId.style.backgroundImage = "url('bildspel" + imageNumber + ".jpg')";

        if (imageNumber == 1) {
            imageNumber = numberOfImages;
        } else {
            imageNumber--;
        }
    }


    // Anropa setInterval för att starta ändring av opacitet och bilduppdatering
    setInterval(updateImage, timer);
}

let changeImageId = document.getElementById("changeImage");
changeImageId.style.backgroundImage = "url('bildspel1.jpg')";

changeImage(3, 5000);



//Logga-in-funktionen--------------
let userName;
let password;
let userNameArrayNumber;

  // Ange sökvägen till textfilen med användarnamnen
  const filePathUserName = 'usernames.txt';

  // Använd Fetch API för att hämta textfilen
  fetch(filePathUserName)
    .then((response) => {
      // Returnera texten som ett löfte (Promise)
      return response.text();
    })
    .then((fileContent) => {
      
      userName = fileContent.split('\r\n'); //delar upp så att infomationen i textfilen formateras så att det funkar till en array
    })

      // Ange sökvägen till textfilen för lösenorden
  const filePathPassword = 'password.txt';

  // Använd Fetch API för att hämta textfilen
  fetch(filePathPassword)
    .then((response) => {
      // Returnera texten som ett löfte (Promise)
      return response.text();
    })
    .then((fileContent) => {
      
      password = fileContent.split('\r\n'); //delar upp så att infomationen i textfilen formateras så att det funkar till en array
    })


function loggedInFunction() {
    localStorage.setItem("loggedInStorage", "true"); 
    location.reload();
}

function loggedInFailFunction() {
    document.getElementById("logIn").style.display = "none";
    document.getElementById("fail").style.display = "block";
    document.getElementById("tryAgain").style.display = "block";
}

loginButton = document.getElementById("logIn");

loginButton.addEventListener("click", function() {
    
    let userNameInput = document.getElementById("userNameInput").value;
    let passwordInput = document.getElementById("passwordInput").value;
    let loggedIn = false;

    let corectUserName = userName.includes(userNameInput); //Om det stämmer blir denna true
    userNameArrayNumber =  userName.indexOf(userNameInput); //Säger vilket nummer i ordningen på arrayen som användarnamnet hittades
    sessionStorage.setItem("userNameSession", userNameInput); //sparar vilken användare det är så att den vet det oavsett om du uppdaterar sidan eller inte
  
   if(corectUserName === true && passwordInput === password[userNameArrayNumber]){ //kollar om användarnamet är korekt och så att lösenordet atshar rätt användarnamn och är korekt.
        loggedInFunction();
   }
   else
   {
    loggedInFailFunction();
   }

   console.log(loggedIn);

});

    tryAgainButton = document.getElementById("tryAgain");

    tryAgainButton.addEventListener("click", function () {
    location.reload();
});





if (localStorage.getItem("loggedInStorage") === "true") { //Inloggad----------------------
    console.log("Inloggad");
    document.getElementById("headerLogIn").style.display = "none";
    document.getElementById("headerLogOut").style.display = "block";
    document.getElementById("logInContainer").style.display = "none";
    document.getElementById("HOneBlockLoggedOut").style.display = "none";
    document.getElementById("HOneBlockLoggedIn").style.display = "block";
    document.getElementById("hOnePersonName").innerHTML = "Välkommen till Brukshundklubben " +sessionStorage.getItem("userNameSession"); //sparar vilken användare det är så att den vet det oavsett om du uppdaterar sidan eller inte
    document.getElementById("rulesBlock").style.display = "flex";
    document.getElementById("createNewUserContainer").style.display = "none"; 
    
    document.getElementById("headerLogOut").addEventListener("click", function () {
        localStorage.removeItem("loggedInStorage"); 
        location.reload();
        
    });
    
    }
else //Utloggad----------------------------------------------------------------------------
{
    document.getElementById("headerLogIn").style.display = "block";
    document.getElementById("headerLogOut").style.display = "none";
    document.getElementById("logInContainer").style.display = "block";
    document.getElementById("HOneBlockLoggedOut").style.display = "block";
    document.getElementById("HOneBlockLoggedIn").style.display = "none";
    document.getElementById("rulesBlock").style.display = "none";
    document.getElementById("createNewUserContainer").style.display = "none"; 
    console.log("Utloggad");
}


    document.getElementById("headerLogIn").addEventListener("click", function () {
        window.scrollBy(0, 350);
    
});
   

    pScrollElement = document.querySelectorAll(".pScroll");

    pScrollElement.forEach(function(pScrollElement) {  //känner av alla p i header
        pScrollElement.addEventListener("click", function() {
            window.scrollBy(0, 400);
        });
    });


    //Skapa använadre___________________________

    document.getElementById("createNewUser").addEventListener("click", function () {
        document.getElementById("logInContainer").style.display = "none";
        document.getElementById("createNewUserContainer").style.display = "block"; 
    
});

document.getElementById("goBack").addEventListener("click", function () {
    location.reload();
    console.log("här");

});

document.getElementById("createNewUserInputs").addEventListener("click", function () {

    let newUserName = document.getElementById("userNameNewMemberInput").value;
    let newPassword = document.getElementById("passwordNewMemberInput").value;
    sessionStorage.setItem("newUserName", newUserName);
    sessionStorage.setItem("newPassword", newPassword);
    location.reload();
});






