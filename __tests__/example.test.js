function soma(a, b) {
    return a + b;
}

test('se eu chamar a função soma com 2 e 3, deve retornar 5', () => {
    const result = soma(2, 3);
    expect(result).toBe(5);
});
