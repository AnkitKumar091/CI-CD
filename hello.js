function sayHello(name) {
  return `Hello, ${name}!`;
}

module.exports = sayHello;

// If run directly
if (require.main === module) {
  console.log(sayHello("GitHub Actions"));
}
