document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("index1.html");
  }
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });
}

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .sendEmailVerification()

    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });
}

function forgotPass() {
  const email = document.getElementById("email").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset link sent to your email id");
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });
}

function sendEmailVerification() {
  // [START auth_send_email_verification]
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      window.alert("Success!");
    })
    .catch(function (error) {
      window.alert("Error");
    });
}

function LogoutUser() {
  console.log("Logout Btn Call");
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Done");
      //   document.getElementById("LoginScreen").style.display = "block";
      //   document.getElementById("dashboard").style.display = "none";
    })
    .catch((e) => {
      console.log(e);
    });
}
