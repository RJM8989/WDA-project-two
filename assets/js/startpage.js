function load() {
	const $name = document.getElementById('name');
	if(playername && $name) $name.value = playername;	
}

function playAsGuest() {
	const name = document.getElementById('name').value;
	if(!name) return alert('Please enter a name!');
	
	playername = name;
	localStorage.setItem('playername', playername);
	location.href = 'mainpage.html'
}

function play() {
	location.href = 'mainpage.html'
}



async function logout() {
	
	const path = '';
	const method = 'POST';
	
	await fetch(path, { method })
	location.reload();

}

async function sendScore(score) {
	if(!isLoggedIn) return;
	const path = '/~/';
	const method = 'POST';
	const headers = { 'Content-Type': 'application/json' }
	const name = playername;
	const body = JSON.stringify({ name, score });
	
	await fetch(path, { method, headers, body });
}

async function getLeaders() {

	const path = '/';
	const method = 'GET'
	const resp = await fetch(path, { method });
	const leaders = await resp.json();
	 
	const $leaders = document.getElementById('leaders');
	if(!leaders.length) {
		$leaders.innerHTML = 'No Leaders';
		return;
	}
	
	
	$leaders.innerHTML = leaders
		.filter(leader => parseInt(leader.data.score) >= 0) 
		.sort((a, b) => parseInt(b.data.score) > parseInt(a.data.score) ? 1 : -1)
		.filter((leader, i) => i < 10)
		.map((leader, i) => `
			<div>${i + 1}. ${leader.data.name} ${leader.data.score}</div>
		`)
		.join('\n')*/
	
}



// function load() {
// 	const $name = document.getElementById('name');
// 	if(playername && $name) $name.value = playername;	
// }

// function playAsGuest() {
// 	const name = document.getElementById('name').value;
// 	if(!name) return alert('Please enter a name!');
	
// 	playername = name;
// 	localStorage.setItem('playername', playername);
// 	location.href = 'mainpage.html'
// }

// function play() {
// 	location.href = 'mainpage.html'
// }



// async function logout() {
	
// 	const path = '';
// 	const method = 'POST';
	
// 	await fetch(path, { method })
// 	location.reload();

// }

// async function sendScore(score) {
// 	if(!isLoggedIn) return;
// 	const path = '/~/';
// 	const method = 'POST';
// 	const headers = { 'Content-Type': 'application/json' }
// 	const name = playername;
// 	const body = JSON.stringify({ name, score });
	
// 	await fetch(path, { method, headers, body });
// }

// async function getLeaders() {

// 	const path = '/';
// 	const method = 'GET'
// 	const resp = await fetch(path, { method });
// 	const leaders = await resp.json();
	 
// 	const $leaders = document.getElementById('leaders');
// 	if(!leaders.length) {
// 		$leaders.innerHTML = 'No Leaders';
// 		return;
// 	}
	
	
// 	$leaders.innerHTML = leaders
// 		.filter(leader => parseInt(leader.data.score) >= 0) 
// 		.sort((a, b) => parseInt(b.data.score) > parseInt(a.data.score) ? 1 : -1)
// 		.filter((leader, i) => i < 10)
// 		.map((leader, i) => `
// 			<div>${i + 1}. ${leader.data.name} ${leader.data.score}</div>
// 		`)
// 		.join('\n')*/
	
// }
