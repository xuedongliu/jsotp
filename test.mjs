import {Base32, TOTP} from "./lib/jsotp.js"

console.log(Base32.random_gen(32))

const totp = TOTP('DMQP5DHB73T3CB4Y');
console.log(totp.now())
