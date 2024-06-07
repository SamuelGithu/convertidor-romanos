function convert() {
    const input = document.getElementById('input').value;
    let result;
    if (isNaN(input)) {
        result = convertRomanToInteger(input.toUpperCase());
    } else {
        result = convertIntegerToRoman(parseInt(input));
    }
    document.getElementById('result').innerText = result.message || result.value;
}

function convertRomanToInteger(roman) {
    const romanNumerals = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let value = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanNumerals[roman[i]];
        const next = romanNumerals[roman[i + 1]];
        if (current < next) {
            value -= current;
        } else {
            value += current;
        }
    }
    return { value, message: '', result: true };
}

function convertIntegerToRoman(num) {
    if (num < 1 || num > 3999) {
        return { value: 0, message: 'Out of range (1-3999)', result: false };
    }
    const romanNumerals = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];
    let result = '';
    for (const [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return { value: result, message: '', result: true };
}

