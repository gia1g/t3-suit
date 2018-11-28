function cekComputer(){
	var computer = ['batu','gunting','kertas']
	var index = Math.floor(Math.random() * computer.length)
	var hasil = computer[index]
	document.getElementById('hasil1').setAttribute("src","img/"+hasil+".png");
	return hasil
}

function logic(com, you){
	if (com == you){
		return 'Game Draw'
	}else if(com == 'batu' && you == 'gunting'){
		return 'You Lose'
	}else if(com == 'batu' && you == 'kertas'){
		return 'You Win'
	}else if(com == 'gunting' && you == 'batu'){
		return 'You win'
	}else if(com == 'gunting' && you == 'kertas'){
		return 'You Lose'
	}else if(com == 'kertas' && you == 'batu'){
		return 'You Lose'
	}else if(com == 'kertas' && you == 'gunting'){
		return 'You win'
	}
}

function batu(){
	var com = cekComputer()
	var you = 'batu'
	document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
	document.getElementById('status').textContent = logic(com, you)
}
function gunting(){
	var com = cekComputer()
	var you = 'gunting'
	document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
	document.getElementById('status').textContent = logic(com, you)
}
function kertas(){
	var com = cekComputer()
	var you = 'kertas'
	document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
	document.getElementById('status').textContent = logic(com, you)
}