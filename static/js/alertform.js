	function validar_form_contato() {
	    var nome = document.getElementById("nome").value;
	    var email = document.getElementById("email").value;
	    var assunto = document.getElementById("assunto").value;
	    var telefone = document.getElementById("telefone").value;
	    var mensagem = document.getElementById("mensagem").value;


	    if (nome == "") {
	        alert("Preencha este campo.");
	        formcontato.nome.focus();
	        return false;
	    }
	    if (email == "") {
	        alert("Preencha este campo.");
	        formcontato.email.focus();
	        return false;
	    }

	    if (telefone == "") {
	        alert("Preencha este campo.");
	        formcontato.telefone.focus();
	        return false;
	    }
	    if (mensagem == "") {
	        alert("Preencha este campo.");
	        formcontato.mensagem.focus();
	        return false;
	    }
	    if (assunto == "") {
	        alert("Preencha este campo.");
	        formcontato.assunto.focus();
	        return false;
	    }
	    alert("Sua menssagem foi enviada");
	    document.location.reload(true);
	}