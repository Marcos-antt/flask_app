from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/home")
def home():
	return render_template("index.html")

@app.route("/contato")
def contato():
	return render_template("contato.html")

@app.route("/eventos")
def eventos():
	return render_template("eventos.html")

@app.route("/cardapio")
def cardapio():
	return render_template("cardapio.html")




	
if __name__ == "__main__":
    app.run(debug=True)