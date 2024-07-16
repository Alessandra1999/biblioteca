/* avaliação */

function avaliar(estrela) {
    let url = window.location;
    url = url.toString()
    url = url.split("cadastro.html");
    url = url[0];

    let s1 = document.getElementById("s1").src;
    let s2 = document.getElementById("s2").src;
    let s3 = document.getElementById("s3").src;
    let s4 = document.getElementById("s4").src;
    let s5 = document.getElementById("s5").src;
    let avaliacao = 0;

    if (estrela == 5) {
        if (s5 == url + "img/star_line.png") {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_filled.png";
            document.getElementById("s3").src = "img/star_filled.png";
            document.getElementById("s4").src = "img/star_filled.png";
            document.getElementById("s5").src = "img/star_filled.png";
            avaliacao = 5;
        } else {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_filled.png";
            document.getElementById("s3").src = "img/star_filled.png";
            document.getElementById("s4").src = "img/star_filled.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 4;
        }
    }

    //ESTRELA 4
    if (estrela == 4) {
        if (s4 == url + "img/star_line.png") {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_filled.png";
            document.getElementById("s3").src = "img/star_filled.png";
            document.getElementById("s4").src = "img/star_filled.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 4;
        } else {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_filled.png";
            document.getElementById("s3").src = "img/star_filled.png";
            document.getElementById("s4").src = "img/star_line.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 3;
        }
    }

    //ESTRELA 3
    if (estrela == 3) {
        if (s3 == url + "img/star_line.png") {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_filled.png";
            document.getElementById("s3").src = "img/star_filled.png";
            document.getElementById("s4").src = "img/star_line.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 3;
        } else {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_filled.png";
            document.getElementById("s3").src = "img/star_line.png";
            document.getElementById("s4").src = "img/star_line.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 2;
        }
    }

    //ESTRELA 2
    if (estrela == 2) {
        if (s2 == url + "img/star_line.png") {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_filled.png";
            document.getElementById("s3").src = "img/star_line.png";
            document.getElementById("s4").src = "img/star_line.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 2;
        } else {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_line.png";
            document.getElementById("s3").src = "img/star_line.png";
            document.getElementById("s4").src = "img/star_line.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 1;
        }
    }

    //ESTRELA 1
    if (estrela == 1) {
        if (s1 == url + "img/star_line.png") {
            document.getElementById("s1").src = "img/star_filled.png";
            document.getElementById("s2").src = "img/star_line.png";
            document.getElementById("s3").src = "img/star_line.png";
            document.getElementById("s4").src = "img/star_line.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 1;
        } else {
            document.getElementById("s1").src = "img/star_line.png";
            document.getElementById("s2").src = "img/star_line.png";
            document.getElementById("s3").src = "img/star_line.png";
            document.getElementById("s4").src = "img/star_line.png";
            document.getElementById("s5").src = "img/star_line.png";
            avaliacao = 0;
        }
    }
    document.getElementById('rating').innerHTML = avaliacao;

} 

class Registro {
    constructor(titulo, autor, editora, genero, lancamento, resumo, rating) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.genero = genero;
        this.lancamento = lancamento;
        this.resumo = resumo;
        this.rating = rating;
    }

    validateData() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === "") {
                return false;
            }
        }
        return true;
    }
}

class Database {

    constructor() {
        const id = localStorage.getItem('id');

        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }

    carregarRegistros() {
        const registros = Array();

        const id = localStorage.getItem('id');

        for (let i = 1; i <= id; i++) {
            const registro = JSON.parse(localStorage.getItem(i));

            if (registro === null) {
                continue;
            }

            registro.id = i;
            registros.push(registro);
        }

        return registros;
    }

    criarRegistro(registro) {
        const id = getNextId();
        localStorage.setItem(id, JSON.stringify(registro));
        localStorage.setItem('id', id);
    }

    removerRegistro(id) {
        localStorage.removeItem(id);
    }

    procurarRegistros(registro) {
        let registrosFiltrados = Array();

        registrosFiltrados = this.carregarRegistros();

        if (registro.titulo !== '') {
            registrosFiltrados = registrosFiltrados.filter(r => r.titulo === registro.titulo);
        }
        if (registro.autor !== '') {
            registrosFiltrados = registrosFiltrados.filter(r => r.autor === registro.autor);
        }
        if (registro.editora !== '') {
            registrosFiltrados = registrosFiltrados.filter(r => r.editora === registro.editora);
        }
        if (registro.genero !== '') {
            registrosFiltrados = registrosFiltrados.filter(r => r.genero === registro.genero);
        }
        if (registro.lancamento !== '') {
            registrosFiltrados = registrosFiltrados.filter(r => r.lancamento === registro.lancamento);
        }

        return registrosFiltrados;
    }
}

const database = new Database();

function getNextId() {
    const nextId = localStorage.getItem('id');
    return parseInt(nextId) + 1;
}

function registrarLivro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const editora = document.getElementById('editora').value;
    const genero = document.getElementById('genero').value;
    const lancamento = document.getElementById('lancamento').value;
    const resumo = document.getElementById('resumo').value;
    const rating = document.getElementById('rating').innerHTML;

    const registro = new Registro(titulo, autor, editora, genero, lancamento, resumo, rating);

    if (registro.validateData()) {
        database.criarRegistro(registro);
    }
}

function carregarRegistros(registros) {
    if (registros === undefined) {
        registros = database.carregarRegistros();
    }

    const listarRegistros = document.getElementById('listarRegistros');
    listarRegistros.innerHTML = '';

    registros.forEach((r) => {
        const row = listarRegistros.insertRow();

        row.insertCell(0).innerHTML = r.titulo;
        row.insertCell(1).innerHTML = r.autor;
        row.insertCell(2).innerHTML = r.editora;
        row.insertCell(3).innerHTML = r.genero;
        row.insertCell(4).innerHTML = r.lancamento;
        row.insertCell(5).innerHTML = r.resumo;
        row.insertCell(6).innerHTML = r.rating;

        const btn = document.createElement('button');

        btn.className = 'btn btn-danger';
        btn.id = r.id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            const id = r.id
            database.removerRegistro(id);
            window.location.reload();
        }

        row.insertCell(7).append(btn)
    })

}

function procurarRegistros() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const editora = document.getElementById('editora').value;
    const genero = document.getElementById('genero').value;
    const lancamento = document.getElementById('lancamento').value;
    const resumo = document.getElementById('resumo');
    const rating = document.getElementById('rating');

    const registro = new Registro(titulo, autor, editora, genero, lancamento, resumo, rating);

    const registros = database.procurarRegistros(registro);

    carregarRegistros(registros);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.getElementById('listarRegistros'))) {
        carregarRegistros();
    }
});


