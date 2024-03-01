const teams = {};

// Function to create a new team
function createTeam() {
    const teamName = document.getElementById('teamName').value;
    if (teamName.trim() !== '') {
        teams[teamName] = [];
        displayTeams();
    }
}

// Function to add a member to a team
function addMember() {
    const teamName = document.getElementById('teamName').value;
    const memberName = document.getElementById('memberName').value;
    if (teamName.trim() !== '' && memberName.trim() !== '') {
        if (teams.hasOwnProperty(teamName)) {
            teams[teamName].push(memberName);
            displayTeams();
        } else {
            alert('Team does not exist.');
        }
    }
}

// Function to join a member to a team
function joinTeam() {
    const joinMemberName = document.getElementById('joinMemberName').value;
    const teamToJoin = document.getElementById('teamToJoin').value;
    if (joinMemberName.trim() !== '' && teamToJoin.trim() !== '') {
        if (teams.hasOwnProperty(teamToJoin)) {
            teams[teamToJoin].push(joinMemberName);
            displayTeams();
        } else {
            alert('Team does not exist.');
        }
    }
}

// Function to join a team by code
function joinTeamByCode() {
    const teamCode = document.getElementById('teamCode').value;
    for (const teamName in teams) {
        if (teams.hasOwnProperty(teamName) && teamName === teamCode) {
            const memberName = document.getElementById('joinMemberName').value;
            if (memberName.trim() !== '') {
                teams[teamName].push(memberName);
                displayTeams();
                return;
            }
        }
    }
    alert('Invalid team code.');
}

// Function to display teams and their members
function displayTeams() {
    const teamsList = document.getElementById('teamsList');
    // teamsList.innerHTML = '';
    for (const team in teams) {
        if (teams.hasOwnProperty(team)) {
            const teamItem = document.createElement('li');
            teamItem.textContent = team + ': ' + teams[team].join(', ');
            teamsList.appendChild(teamItem);
        }
    }
}

// Event listeners for button clicks
document.getElementById('createTeamBtn').addEventListener('click', createTeam);
document.getElementById('addMemberBtn').addEventListener('click', addMember);
document.getElementById('joinTeamBtn').addEventListener('click', joinTeam);
document.getElementById('joinByCodeBtn').addEventListener('click', joinTeamByCode);
