function insertBefore(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  node.insertAdjacentHTML("befoerbegin", text);
}

function insertFirst(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  node.insertAdjacentHTML("afterbegin", text);
}

function insertLast(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (node.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      "insertBefore 함수의 첫 번째 인자는 ELEMENT_NODE 여야 합니다."
    );
  }
  node.insertAdjacentHTML("beforeend", text);
}

function insertAfter(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  node.insertAdjacentHTML("afterend", text);
}
