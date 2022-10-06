var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');

});

var btnAbrirPopupHC = document.getElementById('btn-abrir-popup-hc'),
    overlayHC = document.getElementById('overlay-hc'),
    popupHC = document.getElementById('popup-hc'),
    btnCerrarPopupHC = document.getElementById('btn-cerrar-popup-hc');

btnAbrirPopupHC.addEventListener('click', function(){
    overlayHC.classList.add('active');
    popupHC.classList.add('active');
});

btnCerrarPopupHC.addEventListener('click', function(){
    overlayHC.classList.remove('active');
    popupHC.classList.remove('active');

});