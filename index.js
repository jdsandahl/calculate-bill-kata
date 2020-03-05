function calculateBill(price, vat, tip) {
  if (typeof price && typeof vat && typeof tip === "number") {
    const result = price + (price / 100) * vat + (price / 100) * tip;
    return `£${result}`;
  } else {
    const notNumber = "error";
    return notNumber;
  }
}

module.exports = calculateBill;
