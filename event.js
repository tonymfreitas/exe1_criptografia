function loadFileAsText() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var texto = textFromFileLoaded;
        document.getElementById("textoCifrado").value = texto;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

function salvarTexto() {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var file = fso.CreateTextFile("textoATIVIDADE.txt", true);
    file.writeline(document.getElementById("textoCifrado").value);
    file.Close();
}



function codificar() {
    var mensagem = document.getElementById("textoCifrado").value.toLowerCase();
    var mensagemCodificada = '';
    var cifra = document.getElementById("chave").value;

    var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for (var i = 0; i < mensagem.length; i++) {
            if (mensagem[i] != ' ') {
                for (var j = 0; j < alfa.length; j++) {
                    if (mensagem[i] == alfa[j]) {
                        mensagemCodificada += alfa[(j + parseInt(cifra)) % alfa.length];
                        break;
                    }
                }
            } else {
                mensagemCodificada += ' ';
            }
        }
    console.log(mensagemCodificada);
    document.getElementById("textoCifrado").value = mensagemCodificada;

}

function decodificar() {
    var mensagem = document.getElementById("textoCifrado").value.toLowerCase();
    var mensagemCodificada = '';
    var cifra = document.getElementById("chave").value;

    var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < mensagem.length; i++) {
        if (mensagem[i] != ' ') {
            for (var j = 0; j < alfa.length; j++) {
                if (mensagem[i] == alfa[j]) {
                    var index = (j - parseInt(cifra)) % alfa.length;
                    if(index < 0) {
                        mensagemCodificada += alfa[(26 - parseInt(cifra))];
                    } else {
                        mensagemCodificada += alfa[(j - parseInt(cifra)) % alfa.length];
                    }
                    console.log(j);
                    break;
                }
            }
        } else {
            mensagemCodificada += ' ';
        }
    }
    console.log(mensagemCodificada);
    document.getElementById("textoCifrado").value = mensagemCodificada;

}

