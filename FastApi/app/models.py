import json
import os

DATA_FILE = os.path.join(os.path.dirname(__file__), "items.json")

# Load items from the file if it exists
if os.path.exists(DATA_FILE):
    with open(DATA_FILE, "r") as file:
        items = json.load(file)
else:
    items = []

def get_items():
    return items

def add_item(item):
    items.append(item)
    with open(DATA_FILE, "w") as file:
        json.dump(items, file)