const scrollUpButton = document.getElementById('scrollUp');
if(scrollUpButton){
    scrollUpButton.addEventListener('click', function() {
        window.scrollBy(0, -50);
    });
}


const scrollDownButton = document.getElementById('scrollDown');
if(scrollDownButton){
    scrollDownButton.addEventListener('click', function() {
        window.scrollBy(0, 50);
    });
}


function showParticipantSelected(participant){
    alert(participant)
}

function seeMore(){
    document.getElementById('seeMore').classList.add('hidden')
    createScrollArrow()
}

function createScrollArrow(){
    /*
        <section class="buttons">
            <section class="control-board">
                <button id="scrollUp">&#8593;</button>
            </section>
            <section class="control-board">
                <button id="scrollDown">&#8595;</button>
            </section>
        </section>
    */
    let boardDiv = document.getElementById('board')
    let buttonsSection = document.createElement('section')
    buttonsSection.classList.add('buttons')

    let controlBoardUpSection = document.createElement('section')
    controlBoardUpSection.classList.add('control-board')

    let scrollUpBtn = document.createElement('button')
    scrollUpBtn.id = "scrollUp"
    scrollUpBtn.innerHTML = "&#8593;"
    

    let controlBoardDownSection = document.createElement('section')
    controlBoardDownSection.classList.add('control-board')

    let scrollDownBtn = document.createElement('button')
    scrollDownBtn.id = "scrollDown"
    scrollDownBtn.innerHTML = "&#8595;"

    boardDiv.appendChild(buttonsSection)
    buttonsSection.appendChild(controlBoardUpSection)
    buttonsSection.appendChild(controlBoardDownSection)
    controlBoardUpSection.appendChild(scrollUpBtn)
    controlBoardDownSection.appendChild(scrollDownBtn)
}
