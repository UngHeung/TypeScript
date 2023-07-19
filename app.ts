const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("클릭!");
});

// lib이 활성되었지만 값이 비어있으므로 TS는 document와 console을 제대로 인식하지 못한다.
