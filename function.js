
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

    const lines = [
    'const portfolio = () => {',
    '  console.log("Hello, I\'m a developer.");',
    '}',
    'LOADING...',
    '.........................................90%',
    '...100%'
  ];

  const target = document.getElementById("code");
  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentLine = "";
  let fullText = "";

  function loopTyping() {
    if (!isDeleting) {
      currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        fullText += currentLine.charAt(charIndex);
        target.textContent = fullText;
        charIndex++;
        setTimeout(loopTyping, 40);
      } else {
        fullText += "\n";
        target.textContent = fullText;
        charIndex = 0;
        lineIndex++;
        if (lineIndex < lines.length) {
          setTimeout(loopTyping, 300);
        } else {
          // Start deleting after a pause
          setTimeout(() => {
            isDeleting = true;
            lineIndex = lines.length - 1;
            currentLine = lines[lineIndex];
            fullText = target.textContent;
            loopTyping();
          }, 1200);
        }
      }
    } else {
      // Deleting mode
      if (fullText.length > 0) {
        fullText = fullText.slice(0, -1);
        target.textContent = fullText;
        setTimeout(loopTyping, 20);
      } else {
        // Restart typing
        isDeleting = false;
        lineIndex = 0;
        charIndex = 0;
        currentLine = "";
        fullText = "";
        setTimeout(loopTyping, 500);
      }
    }
  }

  loopTyping();
