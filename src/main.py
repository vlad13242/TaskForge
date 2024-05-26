from flask import Flask
from flask import request, jsonify
from model_function import UsersFunction

app = Flask(__name__)

users = UsersFunction()

@app.route("/user/all", methods=["GET"])
def get_all_users():
    result = users.get_all_users()
    return jsonify(result), 200

@app.route("/user/<id>", methods=["GET"])
def get_user(id):
    result = users.get_user(id)
    return jsonify(result), 200

@app.route("/user/add", methods=["POST"])
def add_user():
    data = request.get_json()
    result = users.add_user(data)
    return jsonify(result), 200

@app.route("/user/update", methods=["PATCH"])
def update_user():
    data = request.get_json()
    result = users.update_user(data)
    return jsonify(result), 200

@app.route("/user/delete/<id>", methods=["DELETE"])
def delete_user(id):
    result = users.delete_user(id)
    return jsonify(result), 200


if __name__ == "__main__":
    app.run(debug=True)
