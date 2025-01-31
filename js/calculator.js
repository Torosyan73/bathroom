function calculatePrice() {
    const pricePerMM2 = 0.05; // Цена за 1 мм² (можно изменить)
    let height = parseFloat(document.getElementById('height').value) || 0;
    let doorWidth = parseFloat(document.getElementById('doorWidth').value) || 0;
    let leftWidth = parseFloat(document.getElementById('leftWidth').value) || 0;
    let rightWidth = parseFloat(document.getElementById('rightWidth').value) || 0;

    let totalArea = (height * doorWidth) + (height * leftWidth) + (height * rightWidth);
    let totalPrice = totalArea * pricePerMM2;

    // document.getElementById('result').innerText = 'Примерная стоимость: ' + totalPrice.toFixed(2) + ' руб.';
    document.getElementById('result').innerText = totalPrice.toFixed(2) + ' руб.';
}