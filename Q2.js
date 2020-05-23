const input = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'A' },
    { id: 4, name: 'C' },
    { id: 4, name: 'C' },
    { id: 5, name: 'C' }
]

const total = (input) => {
    for (i = 0; i < input.length; i++) {
        for (j = input.length - 1; j > i; j--) {
            if (input[i].name === input[j].name) {
                input.splice(j, 1)
            }
            // console.log(i ,':' ,j)
        }
    }
    console.log(input)
}

total(input);