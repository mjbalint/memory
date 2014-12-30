var clickCount = 0;

// Initialize web page 
$(document).ready(function(){
    $('#update_me').html('<p>It is I, the ready function!</p>');

    $('.piece').click(function() {
        clickCount++;
        $('#update_me').html('<p>Click #' + clickCount + '</p>');
        $(this).addClass('selected');
    });
});
