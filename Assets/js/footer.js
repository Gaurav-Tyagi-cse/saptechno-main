    
    
      document.addEventListener('DOMContentLoaded', function () {
          // Footer dropdown functionality for mobile view
          const footerDropdownToggles = document.querySelectorAll('.footer-dropdown-toggle');
    
          footerDropdownToggles.forEach(toggle => {
              toggle.addEventListener('click', function () {
                  // Check if we're in mobile view
                  if (window.innerWidth < 992) {
                      const dropdownMenu = this.nextElementSibling;
                      const icon = this.querySelector('.fa-chevron-down');
    
                      // Toggle the clicked dropdown WITHOUT closing others
                      if (dropdownMenu.style.maxHeight) {
                          dropdownMenu.style.maxHeight = null;
                          icon.classList.remove('rotate');
                      } else {
                          dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
                          icon.classList.add('rotate');
                      }
                  }
              });
          });
    
          // Reset styles when resizing to desktop
          window.addEventListener('resize', function () {
              if (window.innerWidth >= 992) {
                  document.querySelectorAll('.footer-dropdown-menu').forEach(menu => {
                      menu.style.maxHeight = '';
                  });
                  document.querySelectorAll('.fa-chevron-down').forEach(icon => {
                      icon.classList.remove('rotate');
                  });
              }
          });
      });
    