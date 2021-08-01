const DEFAULT_PREFERENCES = {
    darkMode: false,
    largeFont: false,
    expertMode: false,
  }
  
  let userPreferences;
  
  function setPreferences() {
      localStorage.setItem('userPreferences', JSON.stringify(userPreferences))
      
    
  }
   
  function getPreferences() {
    userPreferences = JSON.parse(localStorage.getItem('userPreferences')) || DEFAULT_PREFERENCES
    return userPreferences

  }
  
  function updateInterface() {

  }
  
  function setColorMode() {
  }
  
  function setBaseFontSize() {
  }
  
  function drawAside() {
  }
  
  function populateCustomControls() {
    Object.keys(userPreferences).forEach(function(element) {
      $(`input[name="${element}"]`).attr('checked', userPreferences[element])
    })
  }
  
  $('.trigger').click(function () {
    $('.custom-controls').toggleClass('open');
  });
  
  $('.custom-controls').on('input', 'input', function () {
  });

  getPreferences();
  populateCustomControls();
  updateInterface();
  