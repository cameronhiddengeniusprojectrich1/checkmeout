
document.addEventListener('DOMContentLoaded', function () {
    // Ensure Bootstrap modal functionality works correctly
    var modalElement = document.getElementById('myModal');
    
    // Learn More button triggers the modal
    var learnMoreButton = document.querySelector('button[data-bs-toggle="modal"]');
    learnMoreButton.addEventListener('click', function () {
        var modal = new bootstrap.Modal(modalElement);
        modal.show();
    });

    // "Hello" button inside the first card
    var helloButton = document.querySelector('.card .btn-primary');
    helloButton.addEventListener('click', function () {
        alert('Just showing this works!');
    });

    // View Details button inside the second card
    var viewDetailsButton = document.querySelector('.card .btn-primary:nth-of-type(2)');
    viewDetailsButton.addEventListener('click', function () {
        alert('View Details Button Clicked!');
    });

    // Modal close button functionality
    var closeButton = modalElement.querySelector('.btn-close');
    closeButton.addEventListener('click', function () {
        var modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    });

    // Footer close button functionality inside the modal
    var footerCloseButton = modalElement.querySelector('.btn-secondary');
    footerCloseButton.addEventListener('click', function () {
        var modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    });
});

