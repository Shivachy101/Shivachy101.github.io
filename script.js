window.addEventListener('resize', function() {
    adjustLayout();
  });
  
  function adjustLayout() {
    const screenWidth = window.innerWidth;
  
    // Adjust the grid layout based on screen size
    if (screenWidth <= 768) {
      // Switch to a single-column layout on smaller screens
      document.querySelectorAll('.features, .about-content, .team-members, .event-grid').forEach(grid => {
        grid.style.gridTemplateColumns = '1fr';
      });
    } else {
      // Restore the original grid layout on larger screens
      document.querySelectorAll('.features, .about-content, .team-members, .event-grid').forEach(grid => {
        grid.style.gridTemplateColumns = null;
      });
    }
  }
  
  // Call the adjustLayout function initially to set the layout
  adjustLayout();
