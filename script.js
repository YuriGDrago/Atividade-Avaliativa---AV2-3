var modal = document.querySelector("#modal");
        var modalOverlay = document.querySelector("#modal-overlay");
        var closeButton = document.querySelector("#close-button");
        var openButton = document.querySelector("#open-button");

        closeButton.addEventListener("click", function() {
            modal.classList.remove("open");
            modal.classList.toggle("closed");
            modalOverlay.classList.remove("open");
            modalOverlay.classList.toggle("closed");
        });

        function openModal() {
            modal.classList.remove("closed");
            modal.classList.toggle("open");
            modalOverlay.classList.remove("closed");
            modalOverlay.classList.toggle("open");
            
        
        }