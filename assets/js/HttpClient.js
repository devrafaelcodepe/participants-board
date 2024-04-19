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

function toSelectParticipant(element){
    const participantName = element.getAttribute('data-participant-name')
    if(window.confirm(`Deseja realmente selecionar a instituição ${participantName}?`)){
        const participantId = element.getAttribute('data-participant-id')

        const requestURL = "https://pag-otimo.app/participant/update-counter-selected-for-payment/" + participantId
        const requestOption = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        fetch(requestURL, requestOption)
        .then(response => {
            if(!response.ok){
                throw new Error(response.status + " Error loading data")
            }
        })
        .catch(error => {
            document.getElementById('error').style.display = 'block';
            console.error('{"status": "Request Error", "description": "' + error + '"');
        });
    }
}

function getFullParticipantList(){
    const requestURL = "https://pag-otimo.app/tela/principal/full"
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    fetch(requestURL, requestOption)
        .then(response => {
        console.log("\n" + response.json())
            if (response.ok) {
                console.log('response.ok')
                return response.json()
            }
            throw new Error(response.status + " Error loading data")
        })
        .then(data => {
            document.getElementById('seeMore').style.display = 'none'

            const participantsList = data.participants
            console.log(participants)
            //toUpdateRenderParticipantsList(participants)
        })
        .catch(error => {
            console.error('{"status": "Request Error", "description": "' + error + '"')
        });
}

/*function toUpdateRenderParticipantsList(participants){
    let participantsList = document.getElementyById('participants')
    participantsList.innerHTML = ''

    let newParticipantsList = participants
    newParticipantsList.forEach(function(participant){
        let newParticipantDiv = document.createElement('div')
        newParticipantDiv.classList.add('participant')

        let newParticipantImg = document.createElement('img')
        newParticipantImg.src = participant.logo
        newParticipantImg.alt = participant.orgName
        newParticipantImg.setAttribute('data-participant-id', participant.orgId)
        newParticipantImg.setAttribute('data-participant-name', participant.orgName)
        newParticipantImg.addEventListener('click', function() {toSelectParticipant(this)})
        

        newParticipantImg.setAttribute('th:src', participant.logo);
        newParticipantImg.setAttribute('th:alt', participant.orgName);
        newParticipantImg.setAttribute('th:data-participant-id', participant.orgId);
        newParticipantImg.setAttribute('th:data-participant-name', participant.orgName);


        newParticipantDiv.appendChild(newParticipantImg)
        participantsList.appendChild(newParticipantDiv);
    })
}*/