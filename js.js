let carBrands = ['Toyota', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Isuzu', 'Suzuki',
'Kia', 'Mitsubishi', 'Lexus', 'Mazda', 'Nissan', 'Subaru'];
function showBrands() {
    let brands = document.getElementById('car_brands');
    let list = '';
    let i;
    for (i = 0; i < carBrands.length; i++) {
        list += (i + 1) + '. ' + carBrands[i] + '<br>';
    }
    brands.innerHTML = list;
    document.getElementById('hidden').style.visibility = 'visible';
}
function pickFavBrand() {
    let b = +document.getElementById('favorite_brand').value;
    let chose = document.getElementById('chosenBrand');
    let index  = b - 1;
    let i;
    for (i = 0; i < carBrands.length; i++) {
        if (i === index) {
            chose.innerHTML = carBrands[i];
        }
    }
    chose.style.fontWeight = 'bold';
}