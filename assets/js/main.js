// SignaturePad
/* Signature Dose */
var canvas = document.getElementById("sign-dosen");

function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad1 = new SignaturePad(canvas, {
    backgroundColor: 'white'
});

document.getElementById("reset-dosen").addEventListener('click', function() {
    signaturePad1.clear();
});

/* Signature Kaprodi */
var canvas = document.getElementById("sign-kaprodi");

function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad2 = new SignaturePad(canvas, {
    backgroundColor: 'white'
});

document.getElementById("reset-kaprodi").addEventListener('click', function() {
    signaturePad2.clear();
});

/* Signature Asesor1 */
var canvas = document.getElementById("sign-asesor1");

function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad3 = new SignaturePad(canvas, {
    backgroundColor: 'white'
});

document.getElementById("reset-asesor1").addEventListener('click', function() {
    signaturePad3.clear();
});

/* Signature Asesor2 */
var canvas = document.getElementById("sign-asesor2");

function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad4 = new SignaturePad(canvas, {
    backgroundColor: 'white'
});

document.getElementById("reset-asesor2").addEventListener('click', function() {
    signaturePad4.clear();
});

/* ------------------------------------------------------------------------------------------------------------------------------------- */

// Tambah Form Baru
/* Form Kinerja Bidang Pendidikan */
$(document).on("click", "a.btn-add-row1", function() {
    var baris1 = $("div.baris_pendidikan").eq(0).clone().show();
    $("div#element-wrapper1").append(baris1);
});

/* Form Kinerja Bidang Penelitian */
$(document).on("click", "a.btn-add-row2", function() {
    var baris2 = $("div.baris_penelitian").eq(0).clone().show();
    $("div#element-wrapper2").append(baris2);
});

/* Form Kinerja Bidang Pengabdian */
$(document).on("click", "a.btn-add-row3", function() {
    var baris3 = $("div.baris_pengabdian").eq(0).clone().show();
    $("div#element-wrapper3").append(baris3);
});

/* Form Kinerja Penunjang */
$(document).on("click", "a.btn-add-row4", function() {
    var baris4 = $("div.baris_penunjang").eq(0).clone().show();
    $("div#element-wrapper4").append(baris4);
});

/* Form Validasi */
$(document).on("click", "a.btn-add-row5", function() {
    var baris5 = $("div.baris_validasi").eq(0).clone().show();
    $("div#element-wrapper5").append(baris5);
});

/* -------------------------------------------------------------------------------------------------------------------------------------*/

// Tabs Menu
function setupTabs() {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            console.log(sideBar);
            console.log(tabsContainer);
            console.log(tabNumber);
            console.log(tabToActivate);

            sideBar.querySelectorAll(".tabs__button").forEach(button => {
                button.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

    document.querySelectorAll(".tabs").forEach(tabsContainer => {
        tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
    });    
});

