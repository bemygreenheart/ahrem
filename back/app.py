from crypt import methods
from flask import Flask, render_template
from api import make_search
from flask_cors import CORS
from webargs import fields
from webargs.flaskparser import use_args
import logging

logger = logging.getLogger(__name__)  # or __name__ for current module
logger.setLevel(logging.ERROR)

app = Flask(__name__, static_url_path="/static/")
cors = CORS(app, resources={r"*": {"origins": "*"}})


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/search", methods=["GET"])
@use_args({"keyword": fields.Str(required=True)}, location="query")
def search(args):
    # result = {"title": "Boring", "content": "Something", "author": "John Doe"}
    result = make_search(args["keyword"])
    print(result)
    return result


app
if __name__ == "__main__":
    app.run(port=5000)
