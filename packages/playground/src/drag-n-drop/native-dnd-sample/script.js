// on start dragging draggable item
function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);

    event.currentTarget.style.backgroundColor = 'yellow';
}

// on drag over droppable container
function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData('text');

    const draggableElement = document.getElementById(id);

    const dropzone = event.target;

    // 注意 appendChild 并非复制节点，而是对原节点操作，加到dropzone作为child
    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
}
