var button10 = document.getElementById("button10");
var button100 = document.getElementById("button100");
var button1000 = document.getElementById("button1000");
var sound = document.getElementById("click");
sound.volume = 0.1;

function calculateStats() {
    sound.play();
    var projSTR = document.getElementById("projStr");
    var projDEX = document.getElementById("projDex");
    var projCON = document.getElementById("projCon");
    var projWIL = document.getElementById("projWil");
    var projSPI = document.getElementById("projSpi");
    
    var baseStat = document.getElementById("baseStat");
    
    var strRatio = document.getElementById("strRatio");
    var dexRatio = document.getElementById("dexRatio");
    var conRatio = document.getElementById("conRatio");
    var wilRatio = document.getElementById("wilRatio");
    var spiRatio = document.getElementById("spiRatio");
    
    projSTR.textContent = "Projected STR: " + parseFloat(baseStat.value) * parseFloat(strRatio.value);
    projDEX.textContent = "Projected DEX: " + parseFloat(baseStat.value) * parseFloat(dexRatio.value);
    projCON.textContent = "Projected CON: " + parseFloat(baseStat.value) * parseFloat(conRatio.value);
    projWIL.textContent = "Projected WIL: " + parseFloat(baseStat.value) * parseFloat(wilRatio.value);
    projSPI.textContent = "Projected SPI: " + parseFloat(baseStat.value) * parseFloat(spiRatio.value);
}

function addStatLevel(amount) {
    sound.play();
    var mainStatInParent = document.getElementById("baseStat");
    var mainStatIn = parseInt(mainStatInParent.value);

    mainStatIn += amount;
    mainStatInParent.value = mainStatIn;

    calculateStats();
}

button10.addEventListener("click", () => {
    addStatLevel(10);
});

button100.addEventListener("click", () => {
    addStatLevel(100);
});

button1000.addEventListener("click", () => {
    addStatLevel(1000);
});