const inputA = [
    { id: 1, name: 'customer1', sur_name: 'sur1' },
    { id: 2, name: 'customer2', sur_name: 'sur2' },
    { id: 3, name: 'customer3', sur_name: 'sur3' },
  ]
  const inputB = [
    { id: 1, province: 'SR' },
    { id: 2, province: 'SP' },
    { id: 3, province: 'SA' },
  ]

const Ainput = () => {
    var inputA = {}
    inputA.id = inputAs.length > 0 ? inputAs[inputAs.length - 1].id + 1 : 0;

    console.log('id:', inputA.id, ' Enter name in input A')
    process.stdin.once('data', name => {
        inputA.name = name.toString().trim()

        console.log('id:', inputA.id, ' Enter surname in input A')
        process.stdin.once('data', surname => {
            inputA.surnameA = surname.toString().trim()
            inputAs.push(inputA)
            console.log(inputAs)
        })
    })
}
const Binput = () => {
    var inputB = {}
    inputB.id = inputAs.length > 0 ? inputAs[inputAs.length - 1].id + 1 : 0;
    console.log('id:', inputB.id, ' Enter province in input B')
    process.stdin.once('data', prov => {
        inputB.province = prov.toString().trim()
        inputBs.push(inputB)
        console.log(inputBs)
    })
}

console.log('Select input Enter A or B')
process.stdin.once('data', str => {
    let select = str.toString().trim()
    selection(select)
})

const selection = str => {
    if (str == 'A') {
        Ainput();
    }
    else if (str == 'B') {
        Binput();
    }
    else {
        console.log('pls select A or B')
        process.exit();
    }
}
