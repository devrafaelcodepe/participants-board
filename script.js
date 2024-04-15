document.getElementById('scrollUp').addEventListener('click', function() {
    console.log('up')
    window.scrollBy(0, -50);
});

document.getElementById('scrollDown').addEventListener('click', function() {
    console.log('down')
    window.scrollBy(0, 50); 
});


function showParticipantSelected(participant){
    alert(participant)
}