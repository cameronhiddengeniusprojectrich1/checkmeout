
document.addEventListener('DOMContentLoaded', function () {
    // Ensure Bootstrap modal functionality works correctly for SongSmith page
    var modalElement = document.getElementById('myModal');
    
    if (modalElement) {
        // Learn More button triggers the modal
        var learnMoreButton = document.querySelector('button[data-bs-toggle="modal"]');
        if (learnMoreButton) {
            learnMoreButton.addEventListener('click', function () {
                var modal = new bootstrap.Modal(modalElement);
                modal.show();
            });
        }

        // Modal close button functionality
        var closeButton = modalElement.querySelector('.btn-close');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                var modal = bootstrap.Modal.getInstance(modalElement);
                modal.hide();
            });
        }

        // Footer close button functionality inside the modal
        var footerCloseButton = modalElement.querySelector('.btn-secondary');
        if (footerCloseButton) {
            footerCloseButton.addEventListener('click', function () {
                var modal = bootstrap.Modal.getInstance(modalElement);
                modal.hide();
            });
        }
    }
});

