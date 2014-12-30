var clickCount = 0;
var $lastPiece = null;

// Initialize web page 
$(document).ready(function(){
    $('.piece').click(function() {
        if (null !== $lastPiece) {
            $lastPiece.removeClass('selected');
        }
        $lastPiece = $(this);
        $lastPiece.addClass('selected');
    });
});
