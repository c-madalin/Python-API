// Fetch and display items from the server
async function fetchItems() {
    const response = await fetch('/items');
    const items = await response.json();
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// Add a new item to the server
async function addItem() {
    const itemInput = document.getElementById('item-input');
    const item = itemInput.value;
    if (!item) return alert('Please enter an item!');
    await fetch('/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item })
    });
    itemInput.value = '';
    fetchItems();
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}

// Load items on page load
fetchItems();