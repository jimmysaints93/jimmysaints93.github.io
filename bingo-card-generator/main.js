let a = Math.floor(Math.random() * 11)

var number_rules = {
    'b': [1,15],
    'i': [16,30],
    'n': [31,45],
    'g': [46,60],
    'o': [61,75],
};

function generateRandomNumbers(rules) {

    var numbers = []

    function generateUniqueRandomNumber(min, max, array) {
        let randomNumber = Math.floor(Math.random() * (max - min) ) + min;
        while (array.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (max - min) ) + min;
        }
        return randomNumber;
    } 
    
    for (const [key,value] of Object.entries(rules)) {
        let min = value[0];
        let max = value[1] + 1;
        let i = 0;
        let nums = [];

        while (i < 5) {
            let randomNumber = generateUniqueRandomNumber(min, max, nums);
            if (key == 'n' & i == 2) {
                randomNumber = "FREE"
            }
            nums.push(randomNumber);
            i++;
        }
        numbers.push(nums);
    }

    return numbers;
}


function generate() {
    let generatedNumbers = generateRandomNumbers(number_rules);
    console.log(generatedNumbers);

    let rows = document.querySelectorAll("tr.row");

    for (let i = 0; i < generatedNumbers.length; i++) {
        for (let j = 0; j < rows.length; j++) {
            let childNode = rows[j].querySelectorAll('td')[i];
            childNode.innerHTML=generatedNumbers[i][j];
        }
    }

    html2canvas(document.querySelector("#capture")).then(canvas => {
        // document.body.appendChild(canvas)
        var download = document.getElementById("download-link");
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
    }, {
        dpi: 300,
        useCORS: true,
        allowTaint: true
    });

}

function download(){        
    html2canvas(document.querySelector("#capture")).then(canvas => {
        // document.body.appendChild(canvas)
        var download = document.getElementById("download-link");
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        download.setAttribute("download", "bingo-card.png")
        download.setAttribute("href", image);
        

        
    }, {
        dpi: 300,
        useCORS: true,
        allowTaint: true
    });
}

document.getElementById("generate").onclick = generate;
document.getElementById("download").onclick = download;


generate()