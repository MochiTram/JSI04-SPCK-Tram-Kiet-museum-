const firebaseConfig = {
    apiKey: "AIzaSyDjUMtdBLUnFew8vzJAXhtmcUmkev4ImBg",
    authDomain: "museum-f7eb6.firebaseapp.com",
    databaseURL: "https://museum-f7eb6-default-rtdb.firebaseio.com",
    projectId: "museum-f7eb6",
    storageBucket: "museum-f7eb6.appspot.com",
    messagingSenderId: "1043629760617",
    appId: "1:1043629760617:web:ab90a4fe01f378e32802f8",
    measurementId: "G-TNLZSJKBHE"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()


function register() {
    let email = document.getElementById('reg-email').value
    let username = document.getElementById('reg-username').value
    let password = document.getElementById('reg-pw').value
    console.log(email,username,password)
    if (!validateField(email) || !validateField(username) || !validateField(password)){
        alert('One or more fields are null')
        return
    }

    auth.createUserWithEmailAndPassword(email,password)
        .then(() => {
            let user = auth.currentUser
            let database_ref = database.ref()

            let user_data = {
                email: email,
                username: username,
                password: password,
                timestamp: Date.now()
            }

            database_ref.child('users/' + user.uid).set(user_data)

            alert('Register successfully!')
        })
        .catch((error) => {
            let error_code = error.code
            let error_message = error.message

            console.log(error_code + ' ' + error_message)
        })
}

function login(){

    
}
// Function kiểm tra email
function validateEmail(email) {
    return email.match(/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g)
}

// Function kiểm tra mật khẩu
function validatePassword(password) {
    return password.length < 6
}

// Function kiểm tra ô nhập
function validateField(field) {
    if(field == null || field.length <= 0) {
        return false
    } else {
        return true
    }
}