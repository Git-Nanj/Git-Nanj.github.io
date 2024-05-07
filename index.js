// Code used to make the button for the next html page turn green when clicked
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.green').addEventListener('click', function() {
        document.querySelector('.green').style.backgroundColor = "green";
    });
});
// Make the background of the columns besides the name column in the tables have a red background color
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.red').addEventListener('click', function() {
    var td_tag = document.getElementsByTagName("td");
     for(var i = 0;i < td_tag.length; ++i)
     td_tag[i].style.backgroundColor = "red";
        });
        });

