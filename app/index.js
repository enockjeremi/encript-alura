function main() {
  const encrypt = document.querySelector("#encrypt");
  const decrypt = document.querySelector("#decrypt");
  const message = document.querySelector("#message");

  encrypt.addEventListener("click", (e) => {
    e.preventDefault();
    if (message.value.length === 0) {
      messageAlert("message-alert", "El campo no puede estar vacio.", "error");
      return null;
    }
    const textEncrypt = encryptDecrypt("encrypt", message.value);
    containerResult(textEncrypt);
  });

  decrypt.addEventListener("click", (e) => {
    e.preventDefault();
    if (message.value.length === 0) {
      messageAlert("message-alert", "El campo no puede estar vacio.");
      return null;
    }
    const textEncrypt = encryptDecrypt("decrypt", message.value);
    containerResult(textEncrypt);
  });
}

function encryptDecrypt(type, message) {
  switch (type) {
    case "encrypt":
      return message
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    case "decrypt":
      return message
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
  }
}

function containerResult(textEncrypt) {
  const container = document.querySelector(".container-result");
  container.innerHTML = "";

  const p = document.createElement("p");
  const button = document.createElement("button");

  button.textContent = "Copiar";
  button.classList.add("button-copy");

  button.addEventListener("click", () => clipBoard(textEncrypt));
  p.classList.add("message-encrypt");
  p.append(textEncrypt);
  container.append(p, button);
}

function clipBoard(textToCopy) {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      messageAlert("message-alert", "Texto copiado al portapapeles", "success");
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
    });
}

function messageAlert(id, message, type) {
  const element = document.querySelector(`#${id}`);
  element.innerText = message;
  if (type === "error") {
    element.classList.add("message-alert");
  } else {
    element.classList.add("message-success");
  }

  setTimeout(() => {
    element.innerText = "";
    element.classList.remove("message-alert");
    element.classList.remove("message-success");
  }, 3000);
}

main();
