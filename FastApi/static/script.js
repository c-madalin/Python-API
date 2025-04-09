document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("itemInput");
    const addItemBtn = document.getElementById("addItemBtn");
    const itemList = document.getElementById("itemList");

    async function fetchItems() {
        let response = await fetch("/items");
        let items = await response.json();
        itemList.innerHTML = "";
        items.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${index + 1}. ${item}`;
            itemList.appendChild(li);
        });
    }

    async function addItem() {
        let item = itemInput.value.trim();
        if (!item) return alert("Please enter an item!");
        
        await fetch("/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ item })
        });

        itemInput.value = "";
        fetchItems();
    }

    // Click event for button
    addItemBtn.addEventListener("click", addItem);

    // Enter key event
    itemInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    fetchItems();
});
