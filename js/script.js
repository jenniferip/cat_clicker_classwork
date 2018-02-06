$(document).ready(function() {

    $("#cat_one").on('click', increment);
    $("#cat_two").on('click', increment);
    
    function increment() {
        var counter = parseInt($("#click_count").text());
        counter++;
        $("#click_count").text(counter)
        alert('You have clicked: ' + counter + ' times!');
    };

});
