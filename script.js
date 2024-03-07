let board = [' ', ' ', ' ',
			 ' ', ' ', ' ', 
			 ' ', ' ', ' ']

function displayBoard () {
	console.log(board.slice(0,3))
	console.log(board.slice(3,6))
	console.log(board.slice(6,9))
}
function markCellX(cell) {
	board[cell] = "X"
	displayBoard()
}
function markCellO(cell) {
	board[cell] = "O"
	displayBoard()
}
