// Block and enable send button when check box is selected

let sendBtn = document.getElementById("sendBtn");
let checkbox = document.getElementById("00N6g00000UWw0O");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
});

// Show LGPD modal

  let aLgpd = document.getElementById("lgpdModalBntOpen");
  let lgpdModal = document.getElementById("lgpdModal");
  let lgpdModalBtn = document.getElementById("lgpdModalClose");

  lgpdModalBntOpen.addEventListener('click', event => {
    lgpdModal.style.display = "block";
  });
  
  lgpdModalBtn.addEventListener('click', event => {
    lgpdModal.style.display = "none";
  });
  


/* Get the modal
    var confirmationModal = document.getElementById("confirmationModal");
    var lgpdModal = document.getElementById("lgpdModal")
    
    // Get the button that opens the modal
    var confirmationModalBtn = document.getElementById("sendBtn");
    var lgpdModalBtn = document.getElementById("lgpdModalBtnOpen")
    
    // Get the <span> element that closes the modal
    var confirmModalClose = document.getElementsById("confirmModalClose");
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      confirmModalClose.style.display = "none";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    } */