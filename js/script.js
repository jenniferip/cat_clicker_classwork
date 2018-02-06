$(document).ready(function() {

    $("#cat_pic").on('click', increment);
    function increment() {
        var counter = parseInt($("#click_count").text());
        counter++;
        $("#click_count").text(counter)
        alert('You have clicked: ' + counter + ' times!');
    };

});
