document.getElementById('scrollButton').addEventListener('click', function() {
    // Target the div you want to bring into view
    var targetDiv = document.getElementById('targetDiv');
  
    // Scroll the div into view
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });