const chats = [
    { name: "Sunina", msg: "wt u doing??", type: "groups", img: "https://picsum.photos/id/10/50" },
    { name: "Tara..", msg: "coffee??", type: "squad", img: "https://picsum.photos/id/11/50" },
    { name: "Sunina", msg: "where r u??", type: "groups", img: "https://picsum.photos/id/12/50" },
    { name: "Sunina", msg: "wt u doing??", type: "all", img: "https://picsum.photos/id/13/50" },
    { name: "Tara", msg: "coffee??", type: "squad", img: "https://picsum.photos/id/14/50" }
];

function renderChats(filter = 'all') {
    const list = document.getElementById('chat-list');
    list.innerHTML = '';
    const filtered = filter === 'all' ? chats : chats.filter(c => c.type === filter);
    
    filtered.forEach(chat => {
        list.innerHTML += `
            <div class="chat-item" onclick="window.location.href='chat.html'">
                <img src="${chat.img}">
                <div class="chat-info">
                    <h4>${chat.name}</h4>
                    <p>${chat.msg}</p>
                </div>
                <img src="${chat.img}" class="status-icon">
            </div>`;
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderChats(btn.dataset.filter);
    });
});

document.getElementById('add-tale-btn').onclick = () => window.location.href = 'add_tale.html';
document.getElementById('goto-create').onclick = () => window.location.href = 'create.html';

renderChats();