const note = document.querySelector('[note]')
note.innerHTML = `đáp án tiếng anh (không chuẩn) cho ae tham khảo nhé <333`

const answers = [
    [[1, 'B'], [2, 'C'], [3, 'D'], [4, 'D'], [5, 'A'], [6, 'B'], [7, 'D'], [8, 'D'], [9, 'A'], [10, 'C'], [11, 'D'], [12, 'B'], [13, 'A'], [14, 'C'], [15, 'B'], [16, 'D'], [17, 'D'], [18, 'C'], [19, 'A'], [20, 'C'], [21, 'B'], [22, 'C'], [23, 'B'], [24, 'A'], [25, 'D'], [26, 'A'], [27, 'C'], [28, 'D'], [29, 'D'], [30, 'B'], [31, 'C'], [32, 'A']],

    [[33, 'B'], [34, 'A'], [35, 'A'], [36, 'B'], [37, 'A'], [38, 'D'], [39, 'C'], [40, 'B'], [41, 'A'], [42, 'B'], [43, 'C'], [44, 'B'], [45, 'D'], [46, 'C'], [47, 'D'], [48, 'D'], [49, 'B'], [50, 'C'], [51, 'B'], [52, 'C'], [53, 'C'], [54, 'C'], [55, 'B'], [56, 'D'], [57, 'B'], [58, 'B '], [59, 'A'], [60, 'B'], [61, 'D'], [62, 'D'], [63, 'B'], [64, 'C']],

    [[65, 'B'], [66, 'C'], [67, 'D'], [68, 'B'], [69, 'D'], [70, 'B'], [71, 'A'], [72, 'C'], [73, 'A'], [74, 'B'], [75, 'C'], [76, 'D'], [77, 'A'], [78, 'B'], [79, 'D'], [80, 'D'], [81, 'B'], [82, 'B'], [83, 'D'], [84, 'A'], [85, 'A'], [86, 'B'], [87, 'B'], [88, 'B'], [89, 'C'], [90, 'D'], [91, 'A'], [92, 'C'], [93, 'A'], [94, 'B'], [95, 'A']]
]

function getRandomNumbers(min, max){
    const randomNumberSet = new Set();
    while (randomNumberSet.size < 5) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumberSet.add(randomNumber);
    }

    return Array.from(randomNumberSet);
}

function getRandomAnswer(){
    const characters = ['A', 'B', 'C', 'D'];
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}



const container = document.querySelector("#table-container")
function createTable(a = []){
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headrow = document.createElement('tr');
    
    const tbody = document.createElement('tbody');
    const bodyrow = document.createElement('tr');
    

    const wrongNumbers = getRandomNumbers(a[0][0], a[a.length-1][0])


    a.forEach( (item, index) => {
        const headdata = document.createElement('th');
        headdata.innerHTML = item[0]
        headrow.appendChild(headdata)
        thead.appendChild(headrow)


        const bodydata = document.createElement('td');
        if(wrongNumbers.includes(item[0])){
            bodydata.innerHTML = getRandomAnswer()
        } else {
            bodydata.innerHTML = item[1]
        }
        bodyrow.appendChild(bodydata)
        tbody.appendChild(bodyrow)

        table.appendChild(thead)
        table.appendChild(tbody)

    })
    container.appendChild(table)
}

createTable(answers[0])
createTable(answers[1])
createTable(answers[2])
