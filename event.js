function loadFileAsText() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var texto = textFromFileLoaded;
        document.getElementById("textoCifrado").value = texto;
        document.getElementById("textoCifradoCesar").value = texto;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

function salvarTexto() {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var file = fso.CreateTextFile("textoATIVIDADE.txt", true);
    file.writeline(document.getElementById("textoCifrado").value);
    file.Close();
}


function filterCaracter(mensagem) {
    var string = mensagem,
        pattern = {},
        regexp = /[abc]/;

    pattern = new RegExp(regexp);
    return pattern.test(string)
}


function codificar(tipoCodificacaoCesar) {
    var mensagem = document.getElementById("textoCifrado").value.toLowerCase();
    var mensagemCodificada = '';
    var cifra = '';
    if (tipoCodificacaoCesar) {
        cifra = 3;
    } else {
        cifra = document.getElementById("chave").value;
    }

    var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < mensagem.length; i++) {
        if (mensagem[i] != ' ') {
            for (var j = 0; j < alfa.length; j++) {
                if (isNaN(mensagem[i])) {
                    if (mensagem[i] == alfa[j]) {
                        mensagemCodificada += alfa[(j + parseInt(cifra)) % alfa.length];
                        break;
                    }
                } else {
                    mensagemCodificada += mensagem[i];
                    break;
                }
            }
        } else {
            mensagemCodificada += ' ';
        }
    }
    if(tipoCodificacaoCesar) {
        document.getElementById("textoCifradoCesar").value = mensagemCodificada;
    } else {
        document.getElementById("textoCifrado").value = mensagemCodificada;
    }

}

function codificarCesar() {
    var mensagem = document.getElementById("textoCifrado").value.toLowerCase();
    var mensagemCodificada = '';
    var cifra = 3;

    var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < mensagem.length; i++) {
        if (mensagem[i] != ' ') {
            for (var j = 0; j < alfa.length; j++) {
                if (isNaN(mensagem[i])) {
                    if (mensagem[i] == alfa[j]) {
                        mensagemCodificada += alfa[(j + parseInt(cifra)) % alfa.length];
                        break;
                    }
                } else {
                    mensagemCodificada += mensagem[i];
                    break;
                }
            }
        } else {
            mensagemCodificada += ' ';
        }
    }
    if (tipoCodificacaoCesar) {
        document.getElementById("textoCifradoCesar").value = mensagemCodificada;
    } else {
        document.getElementById("textoCifrado").value = mensagemCodificada;
    }

}

function decodificar(tipoCodificacaoCesar) {
    var mensagem = document.getElementById("textoCifrado").value.toLowerCase();
    var mensagemCodificada = '';
    var cifra = '';
    if (tipoCodificacaoCesar) {
        cifra = 3;
    } else {
        cifra = document.getElementById("chave").value;
    }



    var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < mensagem.length; i++) {
        if (mensagem[i] != ' ') {
            for (var j = 0; j < alfa.length; j++) {
                if (mensagem[i] == alfa[j]) {
                    var index = (j - parseInt(cifra)) % alfa.length;
                    console.log(index);
                    if (index < 0) {
                        mensagemCodificada += alfa[26 + index];
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
    if (tipoCodificacaoCesar) {
        document.getElementById("textoCifradoCesar").value = mensagemCodificada;
    } else {
        document.getElementById("textoCifrado").value = mensagemCodificada;
    }

}

function decodificarCesar() {
    var mensagem = document.getElementById("textoCifrado").value.toLowerCase();
    var mensagemCodificada = '';
    var cifra = 3;

    var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < mensagem.length; i++) {
        if (mensagem[i] != ' ') {
            for (var j = 0; j < alfa.length; j++) {
                if (mensagem[i] == alfa[j]) {
                    var index = (j - parseInt(cifra)) % alfa.length;
                    console.log(index);
                    if (index < 0) {
                        mensagemCodificada += alfa[26 + index];
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