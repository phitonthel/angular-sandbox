function foo() {
    console.log('Hello');
    return 42;
  }
  
  const x = foo.call(); // same as foo()
  console.log(x);
  const y = foo.call(); // same as foo()
  console.log(y);