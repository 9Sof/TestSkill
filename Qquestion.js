const data = [
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
]

const output = []

const check = data => {
    for (i = 0; i < data.length; i++) {
        for (j = i + 1; j < data.length; j++) {
            if (data[i].id === data[j].id) {
                if (data[i].year === data[j].year) {
                    output.unshift([data[i], data[j]])
                }
            }
        }
        output.unshift([data[i]])
    }
    for (i = 0; i < output.length; i++) {
        if (output[i].length > 1) {
            for (j = 0; j < output[i].length; j++) {
                index = output.findIndex(index => index == output[i][j])
                output.splice(j, 1)
                console.log(index, j, i, ':', output[i][j])
            }
            for (j = 0; j < output[i].length; j++) {
                index = output.findIndex(index => index == output[i][j])
                output.splice(j, 1)
                console.log(index, j, i, ':', output[i][j])
            }
        }
    }
    output.sort((a, b) => {
        return a[0].year - b[0].year
    });
    output.sort((a, b) => {
        return a[0].id - b[0].id
    });

    console.log('output : ', output)
}

check(data)