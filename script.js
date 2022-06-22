    // Get the modal
    var confirmationModal = document.getElementById("confirmationModal");
    var lgpdModal = document.getElementById("lgpdModal")
    
    // Get the button that opens the modal
    var confirmationModalBtn = document.getElementById("sendBtn");
    var lgpdModalBtn = document.getElementById("lgpdModalBtnOpen")
    
    // Get the <span> element that closes the modal
    var span = document.getElementsById("confirmModalClose")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
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
    }