const navMeny = document.getElementById("navMeny"),
    navItems = document.getElementsByClassName("header__nav-item")

for (let index = 0; index < navItems.length; index++) {
    navItems[index].addEventListener("click", function(){
        this.classList.toggle("header__nav-item_active")
    })    
}