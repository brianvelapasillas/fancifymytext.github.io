button1.onclick = myFunction;

FS.onchange = myFunction2;  //onchange does it once only. onclick as many times as we want
BB.onchange = myFunction3;

button2.onclick = myFunction4;


function myFunction() {
    alert("Hello, world!")
    document.getElementById("myTextarea").style.fontSize = "24pt";
}

function myFunction2() {
    alert("Hello again!!")
    document.getElementById('myTextarea').style.fontWeight = 'bold';
    document.getElementById('myTextarea').style.textDecoration = 'underline';
    document.getElementById('myTextarea').style.color = 'blue';
}

function myFunction3() {
    document.getElementById('myTextarea').style.fontWeight = 'normal';
    document.getElementById('myTextarea').style.textDecoration = 'none';
    document.getElementById('myTextarea').style.color = '';
}

function myFunction4() {
    document.getElementById('myTextarea').style.textTransform = 'uppercase';

    var txt = document.getElementById('myTextarea');
    txt.value = txt.value.split('.').join('Moo');

}

