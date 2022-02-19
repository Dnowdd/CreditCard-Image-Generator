function setDetail(input, id){
    var input = document.getElementById(input).value;
    var id = document.getElementById(id);

    id.innerHTML = input;
}

function setColor(input,value){
    var input = document.getElementById(input).value;

    document.documentElement.style.setProperty('--card-color-'.concat(value), input);
}

function fileReader(id,input,card){
    var input = document.getElementById(input);
    var card = document.getElementById(card);
    var file = document.getElementById(id).files[0];
    var reader = new FileReader();

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

    reader.onloadend = function () {
        input.src = reader.result;
        card.src = reader.result;
    }
}

function openFileInput(input){
    var input = document.getElementById(input);

    input.click();
}