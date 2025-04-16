
        // Código para insertar el nav
        document.addEventListener("DOMContentLoaded", function() {
            fetch("nav.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("navigation").innerHTML = data;
                });
        });
    
