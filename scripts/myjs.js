/* Global Variables */
var currentBooksYear = 0;

/* OnLoad function */
window.onload = function() {
  $(".button-collapse").sideNav();
  var myUrl = window.location.href;

  var idIndex = myUrl.lastIndexOf('#');
  var idInUrl = myUrl.substring(idIndex);
  if (idIndex > 0 && idInUrl !== "#") {
    hideAll();
    $(idInUrl).show();

    if(idInUrl.includes("books")) {
      toggleBooks(2018);
    }
  }
};

/* General functions */
function hideAll() {
  $("#home").hide();
  $("#books").hide();
  $("#work").hide();
  $("#me").hide();
}

function selectTab(showSection) {
  hideAll();
  $(`#${showSection}`).fadeIn();
}

/* Books */
function toggleBooks(year) {
  console.log(year, currentBooksYear);
  $('.book-row').each(function(i, obj) {
    $(this).slideUp();
  });

  if (year === currentBooksYear) {
    currentBooksYear = 0;
    return;
  }

  $(`.book-row-${year}`).each(function(i, obj) {
    $(this).slideDown();
  });

  currentBooksYear = year;
}
