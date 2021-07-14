
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 10,
    rate: 10
  };
    expect (calculateMonthlyPayment(values)).toEqual('132.15');
});

// const monthlyRate = (values.rate / 100)/ 12;
//   const n = Math.floor(values.years * 12);

//   P = 10000
//   i = 0.008333
//   n = 120

// (10,000 * 0.008333)/ 1 - (1+ 0.008333)^-120
// 83.33/ 1- (1.00833)^-120
// 83.33/ 1-0.3695
// 83.33/ 0.6305
// Answer= 132.1649


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10000,
    years: 10,
    rate: 9.791
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});


/// etc
