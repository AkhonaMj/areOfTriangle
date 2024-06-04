inputBase = document.querySelector("#base")
inputHeight = document.querySelector("#height")
button = document.querySelector("button")
span = document.querySelector("span")


button.addEventListener("click", function areaOfTriangle() {
    span.innerHTML = (inputBase.value/2) * inputHeight.value
}
)

