import {
  pipe,
} from "sanctuary";

// import {
//   config
// } from "sanctuary-def";




// promise(resolve("moin")).then(console.log).catch(console.error);
// console.log(StrMap(String));

// const x = def("x")({})([
//   String,
//   FutureType(ErrorType)(ObjectType),
//   // FutureType(ErrorType)(StrMap(String)),
// ])(() => resolve(
//   // [1] // error
//   { x: "t" } // works
//   // { x: "t", y: 1 } // error
// ));

// promise(x()).then(console.log).catch(console.error);

// console.log("config", config.checkTypes)

pipe([
  // x,
  // resolve,
  // promise
])("test")
  // .then(console.log).catch(console.error);
