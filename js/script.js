
$(document).ready(function() {

    $("#cat_pic").on('click', increment);
    function increment() {
        var counter = parseInt($("#click-count").text());
        counter++;
        $("#click-count").text(counter)
        alert('You have clicked: ' + counter + ' times!');
    });
});