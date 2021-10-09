function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    /*this is to close when the other sidebar is opened */
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openFilter() {
    document.getElementById("myFilterbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "-250px";
     /*this is to close when the other sidebar is opened */
}

function closeFilter() {
    document.getElementById("myFilterbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    
}