
function getCostValue(field) {
    /* get cost value */
    const priceField = document.getElementById(field)
    const getPriceField = parseInt(priceField.innerText);
    return getPriceField;
}

function totalPrice() {
    /* cost value */
    const bestPrice = getCostValue('best-price-field');
    const ramPrice = getCostValue('ram-cost-field');
    const storagePrice = getCostValue('storage-cost-field');
    const deliveryPrice = getCostValue('delivery-cost-field');
    /* total price */
    document.getElementById('total-price-field').innerText = bestPrice + ramPrice + storagePrice + deliveryPrice;
    /* set total = total price */
    document.getElementById('all-together-price').innerText = document.getElementById('total-price-field').innerText;
}

function priceField(fieldId, value) {
    const costField = document.getElementById(fieldId);
    if (value == 1) {
        costField.innerText = 0;  /* use ram=8gb/ssd-256gb/free-delivery */
    }
    else if (value == 2) {
        costField.innerText = 180; /* use ram-16gb/ssd-1tb */
    }
    else if (value == 3) {
        costField.innerText = 100; /* use ssd-512gb */
    }
    else {
        costField.innerText = 20; /* delivery charge 20$ */
    }
}

/* memory */
document.getElementById('ram-btn-8gb').addEventListener('click', function () {
    priceField('ram-cost-field', 1); /* ram cost 8gb = 0$ */
    totalPrice()
})
document.getElementById('ram-btn-16gb').addEventListener('click', function () {
    priceField('ram-cost-field', 2);/* ram cost 16gb = 180$ */
    totalPrice()
})
/* storage */
document.getElementById('ssd-btn-256gb').addEventListener('click', function () {
    priceField('storage-cost-field', 1); /* ssd cost 256gb = 0$ */
    totalPrice()
})
document.getElementById('ssd-btn-512gb').addEventListener('click', function () {
    priceField('storage-cost-field', 3); /* ssd cost 512gb = 100$ */
    totalPrice()
})
document.getElementById('ssd-btn-1tb').addEventListener('click', function () {
    priceField('storage-cost-field', 2); /* ssd cost 1tb = 180$ */
    totalPrice()
})
/* delivery */
document.getElementById('delivery-btn-free').addEventListener('click', function () {
    priceField('delivery-cost-field', 1); /* delivery charge free */
    totalPrice()
})
document.getElementById('delivery-btn-paid').addEventListener('click', function () {
    priceField('delivery-cost-field', 0); /* delivery charge 20$ */
    totalPrice()
});

/* promo-code */

function promoCodeApply() {
    const promoCodeInputField = document.getElementById('promo-code-inputField');
    const promoCodeInput = promoCodeInputField.value;
    const previoustotalPrice = parseFloat(document.getElementById('total-price-field').innerText);
    promoCodeInputField.value = '';
    
    if (promoCodeInput == 'stevekaku') {
        const totalDiscount = previoustotalPrice * 0.2; /* 20% discount */
        const totalPrice = previoustotalPrice - totalDiscount;
        document.getElementById('all-together-price').innerText = totalPrice;
    }
    else if (promoCodeInput == '') {
        alert('please enter a promo code')
    }
    else {
        alert('invalid promo code')
    }
}

document.getElementById('promo-code-applyBtn').addEventListener('click', function () {
    promoCodeApply();
})