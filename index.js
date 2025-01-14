// function checkAdjacentDigits() {
//     const number = document.getElementById('num').value;
//     const strNum = number.toString();

//     let hasAdjacent = false;
//     for (let i = 0; i < strNum.length - 1; i++) {
//         if (strNum[i] === strNum[i + 1]) {
//             hasAdjacent = true;
//             break;
//         }
//     }

//     document.getElementById('ground').textContent = 
//         hasAdjacent ? `${number} has adjacent identical digits.` : `${number} does not have adjacent identical digits.`;
// }

// function checkAdjacentDigits() {
//     // Get the input number
//     const number = document.getElementById('num').value;
//     const strNum = number.toString();

//     let hasAdjacent = false;
//     for (let i = 0; i < strNum.length - 1; i++) {
//         if (strNum[i] === strNum[i + 1]) {
//             hasAdjacent = true;
//             break;
//         }
//     }

//     const armenianNumbers = {
//         0: "զրո",
//         1: "մեկ",
//         2: "երկու",
//         3: "երեք",
//         4: "չորս",
//         5: "հինգ",
//         6: "վեց",
//         7: "յոթ",
//         8: "ութ",
//         9: "ինն"
//     };

//     let armenianSpelling = "";
//     for (const digit of strNum) {
//         armenianSpelling += armenianNumbers[digit] + " ";
//     }

//     // Display the result
//     document.getElementById('ground').textContent = 
//         hasAdjacent 
//         ? `${number} has adjacent identical digits. (${armenianSpelling.trim()})`
//         : `${number} does not have adjacent identical digits. (${armenianSpelling.trim()})`;
// }


// function checkAdjacentDigits() {
//     const number = parseInt(document.getElementById('num').value, 10);

//     if (isNaN(number)) {
//         document.getElementById('output').textContent = "Please enter a valid number.";
//         return;
//     }

//     const strNum = number.toString();

//     let hasAdjacent = false;
//     for (let i = 0; i < strNum.length - 1; i++) {
//         if (strNum[i] === strNum[i + 1]) {
//             hasAdjacent = true;
//             break;
//         }
//     }

//     function spellNumberInArmenian(num) {
//         const units = ["", "մեկ", "երկու", "երեք", "չորս", "հինգ", "վեց", "յոթ", "ութ", "ինն"];
//         const tens = ["", "տաս", "քսան", "երեսուն", "քառասուն", "հիսուն", "վաթսուն", "յոթանասուն", "ութանասուն", "իննսուն"];
//         const hundreds = ["", "հարյուր", "երկուհարյուր", "երեքհարյուր", "չորսհարյուր", "հինգհարյուր", "վեցհարյուր", "յոթհարյուր", "ութհարյուր", "իննհարյուր"];
//         const thousands = ["", "հազար", "երկուհազար", "երեքհազար", "չորսհազար", "հինգհազար", "վեցհազար", "յոթհազար", "ութհազար", "իննհազար"];

//         let result = "";
//         if (num >= 1000) {
//             const thousandPart = Math.floor(num / 1000);
//             result += thousands[thousandPart] + " ";
//             num %= 1000;
//         }

//         if (num >= 100) {
//             const hundredPart = Math.floor(num / 100);
//             result += hundreds[hundredPart] + " ";
//             num %= 100;
//         }

//         if (num >= 10) {
//             const tenPart = Math.floor(num / 10);
//             result += tens[tenPart] + " ";
//             num %= 10;
//         }

//         if (num > 0) {
//             result += units[num] + " ";
//         }

//         return result.trim();
//     }

//     const armenianSpelling = spellNumberInArmenian(number);

//     document.getElementById('ground').textContent = 
//         hasAdjacent 
//         ? `${number} has adjacent identical digits. (${armenianSpelling})`
//         : `${number} does not have adjacent identical digits. (${armenianSpelling})`;
// }

// function checkAdjacentDigits() {
//     // Get the input number
//     const number = parseInt(document.getElementById('num').value, 10);

//     if (isNaN(number) || number < 0 || number >= 1000000) {
//         document.getElementById('output').textContent = "Please enter a valid number between 0 and 999,999.";
//         return;
//     }

//     const strNum = number.toString();

//     let hasAdjacent = false;
//     for (let i = 0; i < strNum.length - 1; i++) {
//         if (strNum[i] === strNum[i + 1]) {
//             hasAdjacent = true;
//             break;
//         }
//     }

//     function spellNumberInArmenian(num) {
//         const units = ["", "մեկ", "երկու", "երեք", "չորս", "հինգ", "վեց", "յոթ", "ութ", "ինն"];
//         const tens = ["", "տաս", "քսան", "երեսուն", "քառասուն", "հիսուն", "վաթսուն", "յոթանասուն", "ութանասուն", "իննսուն"];
//         const hundreds = ["", "հարյուր", "երկուհարյուր", "երեքհարյուր", "չորսհարյուր", "հինգհարյուր", "վեցհարյուր", "յոթհարյուր", "ութհարյուր", "իննհարյուր"];
//         const thousands = ["", "հազար", "երկուհազար", "երեքհազար", "չորսհազար", "հինգհազար", "վեցհազար", "յոթհազար", "ութհազար", "իննհազար"];

//         let result = "";

//         if (num >= 1000) {
//             const thousandPart = Math.floor(num / 1000);
//             result += spellNumberInArmenian(thousandPart) + " " + "հազար ";
//             num %= 1000;
//         }

//         if (num >= 100) {
//             const hundredPart = Math.floor(num / 100);
//             result += hundreds[hundredPart] + " ";
//             num %= 100;
//         }

//         if (num >= 10) {
//             const tenPart = Math.floor(num / 10);
//             result += tens[tenPart] + " ";
//             num %= 10;
//         }

//         if (num > 0) {
//             result += units[num] + " ";
//         }

//         return result.trim();
//     }

//     const armenianSpelling = spellNumberInArmenian(number);

//     document.getElementById('ground').textContent = 
//         hasAdjacent 
//         ? `${number} has adjacent identical digits. (${armenianSpelling})`
//         : `${number} does not have adjacent identical digits. (${armenianSpelling})`;
// }

function checkAdjacentDigits() {
    // Get the input number
    const number = parseInt(document.getElementById('num').value, 10);

    if (isNaN(number) || number < 0 || number >= 1000000) {
        document.getElementById('output').textContent = "Please enter a valid number between 0 and 999,999.";
        return;
    }

    const strNum = number.toString();

    let hasAdjacent = false;
    let adjacentDigits = [];
    for (let i = 0; i < strNum.length - 1; i++) {
        if (strNum[i] === strNum[i + 1]) {
            hasAdjacent = true;
            if (!adjacentDigits.includes(strNum[i])) {
                adjacentDigits.push(strNum[i]); // Add the digit only once
            }
        }
    }

    // Function to spell numbers in Armenian
    function spellNumberInArmenian(num) {
        const units = ["", "", "երկու", "երեք", "չորս", "հինգ", "վեց", "յոթ", "ութ", "ինն"];
        const tens = ["", "տաս", "քսան", "երեսուն", "քառասուն", "հիսուն", "վաթսուն", "յոթանասուն", "ութանասուն", "իննսուն"];
        const hundreds = ["", "հարյուր", "երկուհարյուր", "երեքհարյուր", "չորսհարյուր", "հինգհարյուր", "վեցհարյուր", "յոթհարյուր", "ութհարյուր", "իննհարյուր"];

        let result = "";

        // Process thousands
        if (num >= 1000) {
            const thousandPart = Math.floor(num / 1000);
            result += spellNumberInArmenian(thousandPart) + " " + "հազար ";
            num %= 1000;
        }

        // Process hundreds
        if (num >= 100) {
            const hundredPart = Math.floor(num / 100);
            result += hundreds[hundredPart] + " ";
            num %= 100;
        }

        // Process tens and units as one phrase
        if (num >= 10) {
            const tenPart = Math.floor(num / 10);
            const unitPart = num % 10;
            result += tens[tenPart] + (unitPart > 0 ? units[unitPart] : "") + " ";
            num = 0; // All digits processed
        }

        // Process units if any left
        if (num > 0) {
            result += units[num] + " ";
        }

        return result.trim();
    }

    const armenianSpelling = spellNumberInArmenian(number);

    // Display the result
    document.getElementById('ground').textContent = 
        hasAdjacent 
        ? `${number} has adjacent identical digits (${adjacentDigits.join(" ")}). (${armenianSpelling})`
        : `${number} does not have adjacent identical digits. (${armenianSpelling})`;
}






