from flask import Blueprint, jsonify, request, render_template  # Adaugă render_template
from .models import get_items, add_item

api = Blueprint("api", __name__)

@api.route('/', methods=['GET'])
def home():
    return render_template("index.html")  # Servește fișierul HTML

@api.route('/items', methods=['GET'])
def fetch_items():
    return jsonify(get_items())

@api.route('/items', methods=['POST'])
def create_item():
    data = request.json
    item = data.get("item")
    if item:
        add_item(item)
        return jsonify({"message": "Item added", "items": get_items()}), 201
    return jsonify({"error": "No item provided"}), 400