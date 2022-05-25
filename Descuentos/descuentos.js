const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("ResultP");
  resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
}
// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

// LÓGICA DEL CUPÓN DESCUENTO
const coupons = [
  {
    nameCoupon: "PLATZI-2022",
    discount: 30,
  },
  {
    nameCoupon: "PLATZI-2020",
    discount: 15,
  },
  {
    nameCoupon: "PLATZI-2021",
    discount: 25,
  },
];

const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

const isCouponValueValid = function (coupon) {
  return coupon.nameCoupon === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

function onClickButtonPriceCoupon() {
  if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}
