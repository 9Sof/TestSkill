const data = [
    {
        company: 'ชื่อบริษัท 3',
        year: '2018',
        id: 58,
    },
    {
        company: 'ชื่อบริษัท 4',
        year: '2017',
        id: 61,
    },
    {
        company: 'ชื่อบริษัท 5',
        year: '2019',
        id: 58,
    },
    {
        company: 'ชื่อบริษัท 6',
        year: '2019',
        id: 58,
    },
    {
        company: 'ชื่อบริษัท 1',
        year: '2017',
        id: 57,
    },
    {
        company: 'ชื่อบริษัท 2',
        year: '2018',
        id: 57,
    },
]

const output = []

const arr = []
const arr1 = []
const check = data => {
    for (i = 0; i < data.length; i++) {
        for (j = i + 1; j < data.length; j++) {
            if (data[i].id === data[j].id) {
                if (data[i].year === data[j].year) {
                    arr.push(data[i], data[j])
                }
            }
        }
    }
    
    for (i = 0; i < arr.length; i++) {
        for (j = arr.length - 1; j > i; j--) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
            }
        }
        
    }
    data = data.filter(item => !arr.includes(item))
    for (i = 0; i < data.length; i++) {
        output.push([data[i]])
    }
    

    output.push([...arr])
    output.sort((a, b) => {
        return a[0].year - b[0].year
    });
    output.sort((a, b) => {
        return a[0].id - b[0].id
    });
    console.log('arr1 : ', data)
    console.log('arr : ', arr)
    console.log('output : ', output)
}

check(data)