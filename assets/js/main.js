/**
 * Created by at15_000 on 2014/11/8.
 */
init();

function init(){
    changeBkg();
}

// try to use native selector, just for fun :)
function submit() {
    var form = document.getElementById('bd-form');
    form.submit();
}

// change bkg randomly
function changeBkg(){
    var amount = 8;
    var r = Math.floor(Math.random()*amount);
    var bkgSrc = 'assets/images/bkg' + r + '.jpg';
    document.getElementById('bkg-img').setAttribute('src',bkgSrc);
}