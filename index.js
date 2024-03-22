document.getElementById("Hamburger").addEventListener("click", function() {
            document.getElementById("list_L").style.display = "flex";
            document.getElementById("B_I1").style.display = "inline";
});


document.getElementById("list_L").addEventListener("mouseleave", function() {
    document.getElementById("list_L").style.display = "none";
    document.getElementById("B_I1").style.display = "none";
});

