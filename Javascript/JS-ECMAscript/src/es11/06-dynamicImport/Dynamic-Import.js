const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./Module.js");
    console.log(module);
    module.hello();
})