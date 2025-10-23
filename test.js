const sayHello = require('./hello');

if (sayHello("Ankit") === "Hello, Ankit!") {
  console.log("✅ Test passed!");
  process.exit(0);
} else {
  console.error("❌ Test failed!");
  process.exit(1);
}
