(() => {

  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  console.assert(addTwoNumbers(2, 4) === 6, "Error: 2 + 4 no es 6");
  console.assert(addTwoNumbers(10, 10) === 20, "Error: 10 + 10 no es 20");

  console.log(addTwoNumbers(2, 4));    // 6
  console.log(addTwoNumbers(10, 10));  // 20
})();


