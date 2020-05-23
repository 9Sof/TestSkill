const inputA = [
    { id: 1, name: 'customer1', sur_name: 'sur1' },
    { id: 2, name: 'customer2', sur_name: 'sur2' },
    { id: 3, name: 'customer3', sur_name: 'sur3' }
]
const inputB = [
    { id: 1, province: 'SR' },
    { id: 2, province: 'SP' },
    { id: 3, province: 'SA' }
]
const output = []

const Total = (inputA, inputB) => {
    i = 0
    while (i < inputA.length) {
        var out = {}
        out.id = output.length > 0 ? output[output.length - 1].id + 1 : 1;
        out.name = inputA[i].name
        out.sur_name = inputA[i].sur_name
        out.province = inputB[i].province
        output.push(out)
        i++;
    }
    console.log(output)
}

Total(inputA, inputB);