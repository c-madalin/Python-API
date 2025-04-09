from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# File to store items
DATA_FILE = "items.json"

# Load items from the file if it exists
if os.path.exists(DATA_FILE):
    with open(DATA_FILE, "r") as file:
        items = json.load(file)
else:
    items = []

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/items', methods=['POST'])
def add_item():
    data = request.json
    item = data.get("item")
    if item:
        items.append(item)
        # Save items to the file
        with open(DATA_FILE, "w") as file:
            json.dump(items, file)
        return jsonify({"message": "Item added", "items": items}), 201
    return jsonify({"error": "No item provided"}), 400

@app.route('/items', methods=['GET'])
def get_items():
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True)