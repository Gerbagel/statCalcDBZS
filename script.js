function calculateStats(statsForm) {
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