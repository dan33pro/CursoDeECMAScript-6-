//              Const y Let
// Esta es la nueva propuesta para variables de JS
// que traen consigo ciertas particularidades

//--------------------------------------------
// Scope        ||    const   ||  let ||  var
// -------------------------------------------
// Global       ||    NO      ||  NO  ||  SI
// Function     ||    SI      ||  SI  ||  SI
// Block        ||    SI      ||  SI  ||  NO
// -------------------------------------------
// Reasignación ||    NO      ||  SI  ||  SI
// -------------------------------------------

{
    var globalVar = "Global var";
    console.log(globalVar);
}

{
    let globalLet = "Global let";
    console.log(globalLet);
}

{
    const globalConst = "Global const";
    console.log(globalConst);
}

console.log(globalVar);
