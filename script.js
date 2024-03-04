
   
 
    var images = [
      "background4.jpg",
      "background2.jpg",
      "background3.jpg",
    ];
    var currentIndex = 0;
    var bgImage = document.querySelector(".bg-image");

    function changeBackgroundImage() {
      currentIndex = (currentIndex + 1) % images.length;
      bgImage.style.opacity = 0;
      setTimeout(function () {
        bgImage.style.backgroundImage = 'url("' + images[currentIndex] + '")';
        bgImage.style.opacity = 1;
      }, 150); // Change opacity after 500ms transition
    }


   

    setInterval(changeBackgroundImage, 5000); // Change every 5 seconds


    window.addEventListener("scroll", function () {
      const parallax = document.querySelector(".parallax");
      let scrollPosition = window.pageYOffset;
      parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });


    window.addEventListener("scroll", function () {
      const parallaxAbout = document.querySelector(".parallaxAbout");
      let scrollPosition = window.pageYOffset;
      parallaxAbout.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });


    
    // Services page

    function switchTab(tabId) {
      // Hide all tabs
      const tabs = document.querySelectorAll(".tab-content");
      tabs.forEach((tab) => tab.classList.remove("active"));

      // Deactivate all tab buttons
      const tabButtons = document.querySelectorAll(".tab");
      tabButtons.forEach((button) => button.classList.remove("active"));

      // Show the selected tab
      const selectedTab = document.getElementById(tabId);
      selectedTab.classList.add("active");

      // Activate the corresponding tab button
      const selectedTabButton = document.querySelector(
        `.tab[data-tab="${tabId}"]`
      );
      selectedTabButton.classList.add("active");

      // Update tab image
      const tabImage = document.getElementById("tabImage");
      tabImage.src = "";

      switch (tabId) {
        case "tab1":
          tabImage.src = "Potential-of-your-data.png";
          break;
        case "tab2":
          tabImage.src = "Our-Value.png";
          break;
        case "tab3":
          tabImage.src = "Potential-of-your-data.png";
          break;
        default:
          // Handle default case if needed
          break;
      }
    }

    // Example of how to use the function with a click event
    document.querySelectorAll(".tab").forEach((tabElement) => {
      tabElement.addEventListener("click", function (event) {
        const tabId = event.currentTarget.getAttribute("data-tab");
        switchTab(tabId);
      });
    });

    window.addEventListener("scroll", function () {
      const parallaxService = document.querySelector(".parallaxService");
      let scrollPosition = window.pageYOffset;
      parallaxService.style.transform =
        "translateY(" + scrollPosition * 0.5 + "px)";
    });
