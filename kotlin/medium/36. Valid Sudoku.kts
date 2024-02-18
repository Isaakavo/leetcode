//Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//
//Each row must contain the digits 1-9 without repetition.
//Each column must contain the digits 1-9 without repetition.
//Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//Note:
//
//A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//Only the filled cells need to be validated according to the mentioned rules.

val board1 = arrayOf(
    charArrayOf('5', '3', '.', '.', '7', '.', '.', '.', '.'),
    charArrayOf('6', '.', '.', '1', '9', '5', '.', '.', '.'),
    charArrayOf('.', '9', '8', '.', '.', '.', '.', '6', '.'),
    charArrayOf('8', '.', '.', '.', '6', '.', '.', '.', '3'),
    charArrayOf('4', '.', '.', '8', '.', '3', '.', '.', '1'),
    charArrayOf('7', '.', '.', '.', '2', '.', '.', '.', '6'),
    charArrayOf('.', '6', '.', '.', '.', '.', '2', '8', '.'),
    charArrayOf('.', '.', '.', '4', '1', '9', '.', '.', '5'),
    charArrayOf('.', '.', '.', '.', '8', '.', '.', '7', '9')
)

val columnSet = mutableSetOf<Char>()

fun isValidSudoku(board: Array<CharArray>): Boolean {
    for (i in 0..board.size - 1) {
        val row = board[i]
        val isValidRow = validateRow(row)
        if (!isValidRow) return false
        for (j in 0..row.size - 1) {
            val column = row[j]
            columnSet.add(board[j][i])
        }
        val isValidColumn = validateRow(columnSet.toCharArray())
        if (!isValidColumn) return false
        columnSet.removeAll(columnSet)
    }

    return true
}

fun validateRow(row: CharArray): Boolean = row.filter { it != '.' }.toSet().size == row.filter { it != '.' }.size



isValidSudoku(board1)