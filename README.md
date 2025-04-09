# Flask Item List App

This is a simple Flask-based web application that allows users to manage a list of items. The app provides a user-friendly interface to add and view items, with data persistence using a JSON file.

## Features

- **Add Items**: Users can add items to the list via the web interface.
- **View Items**: The app displays the list of items dynamically.
- **Data Persistence**: Items are saved in a `JSON` file (`items.json`) to ensure data is retained across application restarts.

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Data Storage**: JSON file

## How It Works

1. **Frontend**:
   - The user interacts with the interface in `index.html`.
   - JavaScript (`script.js`) handles API calls to the backend.

2. **Backend**:
   - Flask serves the frontend and provides two API endpoints:
     - `POST /items`: Adds a new item to the list.
     - `GET /items`: Retrieves the current list of items.

3. **Data Persistence**:
   - Items are stored in `items.json`. When the app starts, it loads existing items from this file.


   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
