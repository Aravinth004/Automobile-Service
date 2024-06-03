
let id = (id) => document.getElementById(id)
    let username_ip = id("user_name")
    let password_ip = id("password")
    
     fetch('./users.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    let  fun =() => {
        console.log(username_ip.value, password_ip.value);
        console.dir(window.history)
        

    }
    // var demo_ip = id("service")

    function demo(a){
        location.assign("./booking.html")
        localStorage.setItem("x",a)
        console.log(localStorage.x)
        setTimeout(() => {
           demo1()
            
        }, 1000);
        
    }
    function demo1(){
       
        console.log(localStorage.x)

           
    }
    let demo_ip = id("service")
    demo_ip.options.selectedIndex = localStorage.x
    console.log()


