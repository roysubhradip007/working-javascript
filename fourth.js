function demonstrateHoisting() {
    console.log(a);
    var a = 5;
    let b = 10;
    const c = 15;

    console.log(a);
    console.log(b);
    console.log(c);
}

demonstrateHoisting();