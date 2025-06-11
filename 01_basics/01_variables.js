const accountId = 14673
let accountEmail = "anmol@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "1212121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issssue in block scope and functional scope
*/


console.table([accountId, accountPassword, accountCity, accountState])