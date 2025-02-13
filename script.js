/* JavaScript for music playing on Our Studio page */
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event listener executed.'); 
  const audio = document.getElementById('background-music');

  // Pause music when the page loses focus
  document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
          audio.pause();
      } else {
          audio.play();
      }
  });

  // Play/pause music when clicking on a designated button or element
  const playPauseButton = document.getElementById('play-pause-button');
  playPauseButton.addEventListener('click', function() {
      if (audio.paused) {
          audio.play();
          playPauseButton.textContent = 'Pause Music';
      } else {
          audio.pause();
          playPauseButton.textContent = 'Play Music';
      }
  });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Function to redirect to home page
function redirectToHomePage() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', submitForm);
});

function submitForm(event) {
    event.preventDefault();
    alert("Registration form has been sent!");
    window.location.href = "confirmation.html"; 
}


// Listen for messages from the iframe
window.addEventListener('message', function(event) {
    // Check if the message is from the iframe and contains the submission event
    if (event.source === iframe.contentWindow && event.data === 'formSubmitted') {
        // If form submission is complete, redirect to home page
        redirectToHomePage();
    }
});



