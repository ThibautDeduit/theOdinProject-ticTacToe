const board = (function () {
	let grid = [' ', ' ', ' ',
				' ', ' ', ' ', 
				' ', ' ', ' ']

	function display () {
		console.log(grid.slice(0,3))
		console.log(grid.slice(3,6))
		console.log(grid.slice(6,9))
	}

	function mark (player, cell) {
		grid[cell] = player.sign
		display()
		checkForWin(player)
		checkForDraw()
	}

	function checkForWin (player) {
		if ((grid[0] + grid[1] + grid [2] == player.sign.repeat(3)) ||
		(grid[3] + grid[4] + grid [5] == player.sign.repeat(3)) ||
		(grid[6] + grid[7] + grid [8] == player.sign.repeat(3)) ||
		(grid[0] + grid[3] + grid [6] == player.sign.repeat(3)) ||
		(grid[1] + grid[4] + grid [7] == player.sign.repeat(3)) ||
		(grid[2] + grid[5] + grid [8] == player.sign.repeat(3)) ||
		(grid[0] + grid[4] + grid [8] == player.sign.repeat(3)) ||
		(grid[2] + grid[4] + grid [6] == player.sign.repeat(3))) {
			console.log(`${player.name} wins!`)
			game.over = true
			reset()
		}
	}

	function checkForDraw () {
		if (!grid.includes(' ')) {
			console.log("It's a draw")
			game.over = true
			reset()
		}
	}

	function reset () {
		grid = [' ', ' ', ' ',
				' ', ' ', ' ', 
				' ', ' ', ' ']
	}

	return { grid, mark }
})()


const game = (function () {
	let round = 1
	let over = false

	const p1 = { name: "Player 1", sign: "0" }
	const p2 = { name: "Player 2", sign: "X" }

	function start () {
		while (!game.over) {
			round % 2 ? play(p1) : play(p2)
		}
	}

	function play (player) {
		let cell = prompt(`${player.name}, choose a cell from 0 to 8:`)
		while (board.grid[cell] != ' ') {
			cell = prompt(`Wrong choice, try again`)
		}
		board.mark(player, cell)
		round++
	}

	return { start, over }
})()

game.start(board)
