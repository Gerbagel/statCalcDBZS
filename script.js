var button10 = document.getElementById("button10");
var button100 = document.getElementById("button100");
var button1000 = document.getElementById("button1000");
var muteButton = document.getElementById("muteButton");
var sound = document.getElementById("click");
var d = new Date();
var cookieExpire = d.getTime() + 24*60*60*1000;
sound.volume = 0.1;

function calculateStats() {
    let tempSound = sound.cloneNode();
    tempSound.volume = sound.volume;
    tempSound.play();
    tempSound.remove();
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
    var mainStatInParent = document.getElementById("baseStat");
    var mainStatIn = parseInt(mainStatInParent.value);

    mainStatIn += amount;
    mainStatInParent.value = mainStatIn;

    calculateStats();
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function onLoad() {
    let cookieString = getCookie("isMute");
    console.log(cookieString);

    if (cookieString === "0" || cookieString === 0) {
        console.log("enabled");
        sound.volume = 0.1;
        muteButton.childNodes[0].src = "assets/volume-on.svg";
    }
    else if (cookieString == "1" || cookieString == 1) {
        console.log("disabled");
        sound.volume = 0;
        muteButton.childNodes[0].src = "assets/volume-mute.svg";
    }
    else {
        console.log("enabled1");
        document.cookie = "isMute=0;expires=" + cookieExpire + ";path=/";
        sound.volume = 0.1;
        muteButton.childNodes[0].src = "assets/volume-on.svg";
    }
}

muteButton.addEventListener("click", () => {
    if (sound.volume > 0) {
        let tempSound = sound.cloneNode();
        tempSound.volume = sound.volume;
        tempSound.play();
        tempSound.remove();
        
        document.cookie = "isMute=1;expires=" + cookieExpire + ";path=/;SameSite=Lax;";
        sound.volume = 0;
        muteButton.childNodes[0].childNodes[0].childNodes[0].src = "assets/volume-mute.svg";
    }
    else {
        document.cookie = "isMute=0;expires=" + cookieExpire + ";path=/;SameSite=Lax;";
        sound.volume = 0.1;
        muteButton.childNodes[0].childNodes[0].childNodes[0].src = "assets/volume-on.svg";
    }
});

button10.addEventListener("click", () => {
    addStatLevel(10);
});

button100.addEventListener("click", () => {
    addStatLevel(100);
});

button1000.addEventListener("click", () => {
    addStatLevel(1000);
});