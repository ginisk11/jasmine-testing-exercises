it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 1005,
    years: 10,
    rate: 6.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('11.26');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1011,
    years: 12,
    rate: 7.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('10.67');
});

it("should handle high interest rates", function() {
  const values = {
    amount: 10000,
    years: 60,
    rate: 78
  };
  expect(calculateMonthlyPayment(values)).toEqual('650.00');
});
