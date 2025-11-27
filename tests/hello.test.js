const fs = require('fs');
const path = require('path');

describe("Vérification de la page index.html", () => {
  let html;

  beforeAll(() => {
    const filePath = path.resolve(__dirname, '../index.html');
    html = fs.readFileSync(filePath, 'utf8');
    document.body.innerHTML = html;
  });

  test("le <h1> doit être 'Hello World depuis gitHub Codespaces !'", () => {
    const h1 = document.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent.trim()).toBe('Hello World depuis gitHub Codespaces !');
  });

  test("l'élément #current-date doit exister", () => {
    const dateElement = document.getElementById('current-date');
    expect(dateElement).not.toBeNull();
  });
});
