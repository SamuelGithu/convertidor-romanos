QUnit.test("convertIntegerToRoman", function(assert) {
    assert.strictEqual(convertIntegerToRoman(1).value, "I", "1 should be converted to I");
    assert.strictEqual(convertIntegerToRoman(4).value, "IV", "4 should be converted to IV");
    assert.strictEqual(convertIntegerToRoman(9).value, "IX", "9 should be converted to IX");
    assert.strictEqual(convertIntegerToRoman(58).value, "LVIII", "58 should be converted to LVIII");
    assert.strictEqual(convertIntegerToRoman(1994).value, "MCMXCIV", "1994 should be converted to MCMXCIV");
    assert.strictEqual(convertIntegerToRoman(3999).value, "MMMCMXCIX", "3999 should be converted to MMMCMXCIX");

    // Agrega aquí más casos de prueba según lo definido en la tarea anterior
});

QUnit.test("convertRomanToInteger", function(assert) {
    assert.strictEqual(convertRomanToInteger("I").value, 1, "I should be converted to 1");
    assert.strictEqual(convertRomanToInteger("IV").value, 4, "IV should be converted to 4");
    assert.strictEqual(convertRomanToInteger("IX").value, 9, "IX should be converted to 9");
    assert.strictEqual(convertRomanToInteger("LVIII").value, 58, "LVIII should be converted to 58");
    assert.strictEqual(convertRomanToInteger("MCMXCIV").value, 1994, "MCMXCIV should be converted to 1994");
    assert.strictEqual(convertRomanToInteger("MMMCMXCIX").value, 3999, "MMMCMXCIX should be converted to 3999");

    // Agrega aquí más casos de prueba según lo definido en la tarea anterior
});

