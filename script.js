document.getElementById('scrollUp').addEventListener('click', function() {
    window.scrollBy(0, -50);
});

document.getElementById('scrollDown').addEventListener('click', function() {
    window.scrollBy(0, 50); 
});


function showParticipantSelected(participant){
    alert(participant)
}