alert('INI ADALAH PERMAINAN SUWIT JAWA, ANDA ADALAH PLAYER BEWARNA BIRU');
const randomColor = document.getElementById('randomColor');
randomColor.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);
	document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
})

function getChoiceComputer() {
	const computer = Math.random();
	if(computer < 0.34) return 'gajah';
	if(computer >= 0.34 && computer > 0.67) return 'orang';
	return 'semut';
}

function getResult(computer, player) {
	if(player == computer) return 'DRAW';
	if(player == 'gajah') return (computer == 'orang') ? 'YOU WIN!' : 'YOU LOSE!';
	if(player == 'orang') return (computer == 'gajah') ? 'YOU LOSE!' : 'YOU WIN!';
	if(player == 'semut') return (computer == 'orang') ? 'YOU LOSE!' : 'YOU WIN!';
}

function spin() {
	const imgComputer = document.querySelector('.one ul li img');
	const image = ['gajah','orang','semut'];
	let i = 0;
	const startTime = new Date().getTime();
	setInterval(function() {
		if (new Date().getTime() - startTime > 1000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src' , 'image/' + image[i++] + '.png');
		if (i == image.length) i = 0;
	}, 100);
}

const choice = document.querySelectorAll('.two ul li img');
let win = 1;
let lose = 1;
choice.forEach(function(pil) {
	
	pil.addEventListener('click', function() {const choiceComputer = getChoiceComputer();
		const choicePlayer = pil.className;
		const result = getResult(choiceComputer,choicePlayer);
		
		spin();
		setTimeout(function(){
			const imageComputer = document.querySelector('.imageComputer');
			imageComputer.setAttribute('src', 'image/'+ choiceComputer + '.png');
			const info = document.querySelector('.info');
			info.innerHTML = result;
			const scoreComputer = document.querySelector('.scoreComputer');
			const scorePlayer = document.querySelector('.scorePlayer');
			if(result == 'YOU WIN!') {
				scorePlayer.innerHTML = win++;
			}
			if(result == 'YOU LOSE!') {
				scoreComputer.innerHTML = lose++;	
			}
		},1000);
		sPlayer.innerHTML = pPlayer;
	})
});