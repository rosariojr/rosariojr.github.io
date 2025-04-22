
        // Código para insertar el nav
        document.addEventListener("DOMContentLoaded", function() {
            fetch("nav.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("navigation").innerHTML = data;
                })
                .catch(error => console.error("Hubo un error:", error));
        });
        // Código para insertar el profile

        document.addEventListener("DOMContentLoaded", function() {
            fetch("profile.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("profilepic").innerHTML = data;
                })
                .catch(error => console.error("Hubo un error:", error));

        });
    


    function showSection(sectionId) {
      // Hide all sections
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });

      // Remove active class from all buttons
      document.querySelectorAll('.submenu button').forEach(btn => {
        btn.classList.remove('active');
      });

      // Show selected section and activate button
      document.getElementById(sectionId).classList.add('active');
      event.target.classList.add('active');
    }
