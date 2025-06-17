from flask import Flask, request
from flask_cors import CORS
from pydantic import ValidationError

from form import SendLinkForm
import helper


app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route("/")
def home():
    """Landing page with name and phone number validation"""
    try:
        form = SendLinkForm(**request.args)
    except ValidationError as e:
        print(e.errors())
        return {"result": "error"}

    link = helper.generate_link(form.name)
    message = helper.create_message(link)
    helper.send_text(message, form.number)
    return {"result": "success", "link": link}


if __name__ == "__main__":
    app.run()
