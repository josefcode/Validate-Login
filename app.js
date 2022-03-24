

function login(){
  
     let email = document.getElementById('email')
     let password = document.getElementById('password')
    // console.log('clicked')

     if(email.value === "admin@gmail.com" && password.value ==="admin"){
        localStorage.setItem(email.value, password.value)
        // alert('usuario authanticacao')
        window.location.href = "test.html"
     }else{
         alert ("please add the default email : admin@gmail.com and password: admin")
     }

}
