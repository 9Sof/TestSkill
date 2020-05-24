const input = [[0], [1], [[2], [3],[4]], [5]]

const output = []
const push = (input) => {
    for (i = 0; i < input.length; i++) {
        if (input[i].length > 1) {
            for (j = 0; j < input[i].length; j++) {
                output.push(input[i][j][0])
                // console.log(input[i][j])
            }
        }
        else {
            output.push(input[i][0])
            // console.log(input[i])
        }
    }
    console.log(output)

}
push(input)