function hello() {
  return "Hello World";
}

test("La fonction hello renvoie 'Hello World'", () => {
  expect(hello()).toBe("Hello World");
});
