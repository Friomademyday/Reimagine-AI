// chat.js

const ChatUI = {
    
    init: () => {
        const chatDiv = document.createElement('div');
        chatDiv.id = 'chat-interface';
        chatDiv.className = 'fixed inset-0 bg-[#0d0d15] z-[100] transition-transform duration-500 translate-y-full flex flex-col';
        chatDiv.innerHTML = `
            <header class="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#1a1a1a]/80 backdrop-blur-xl">
                <button onclick="ChatUI.close()" class="p-2 text-[#c773ff]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <div class="flex flex-col items-center">
                    <img id="chat-avatar" src="" class="w-8 h-8 rounded-full object-cover mb-1 border border-white/10">
                    <h3 id="chat-name" class="text-[11px] font-bold text-white uppercase tracking-widest"></h3>
                </div>
                <div class="w-10"></div>
            </header>
            <div id="message-container" class="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                <div class="flex flex-col items-center mb-8 px-8 text-center">
                    <img id="chat-large-avatar" src="" class="w-20 h-20 rounded-full object-cover shadow-2xl mb-4 border-2 border-purple-500/20">
                    <p id="chat-description" class="text-[11px] text-zinc-400 italic leading-relaxed"></p>
                </div>
            </div>
            <div class="p-4 bg-[#1a1a1a]/80 backdrop-blur-xl border-t border-white/5">
                <div class="flex items-center gap-3 bg-zinc-900/50 rounded-full px-4 py-2 border border-white/5">
                    <input type="text" placeholder="iMessage" class="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder-zinc-600">
                    <button class="w-8 h-8 bg-[#c773ff] rounded-full flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(chatDiv);
    },

    open: (char) => {
        document.getElementById('chat-name').innerText = char.title;
        document.getElementById('chat-avatar').src = char.img;
        document.getElementById('chat-large-avatar').src = char.img;
        document.getElementById('chat-description').innerText = char.chatDesc;
        document.getElementById('chat-interface').classList.remove('translate-y-full');
    },

    close: () => {
        document.getElementById('chat-interface').classList.add('translate-y-full');
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', ChatUI.init);// chat.js

const ChatUI = {
    // Inject the Chat Interface into the body
    init: () => {
        const chatDiv = document.createElement('div');
        chatDiv.id = 'chat-interface';
        chatDiv.className = 'fixed inset-0 bg-[#0d0d15] z-[100] transition-transform duration-500 translate-y-full flex flex-col';
        chatDiv.innerHTML = `
            <header class="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#1a1a1a]/80 backdrop-blur-xl">
                <button onclick="ChatUI.close()" class="p-2 text-[#c773ff]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <div class="flex flex-col items-center">
                    <img id="chat-avatar" src="" class="w-8 h-8 rounded-full object-cover mb-1 border border-white/10">
                    <h3 id="chat-name" class="text-[11px] font-bold text-white uppercase tracking-widest"></h3>
                </div>
                <div class="w-10"></div>
            </header>
            <div id="message-container" class="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                <div class="flex flex-col items-center mb-8 px-8 text-center">
                    <img id="chat-large-avatar" src="" class="w-20 h-20 rounded-full object-cover shadow-2xl mb-4 border-2 border-purple-500/20">
                    <p id="chat-description" class="text-[11px] text-zinc-400 italic leading-relaxed"></p>
                </div>
            </div>
            <div class="p-4 bg-[#1a1a1a]/80 backdrop-blur-xl border-t border-white/5">
                <div class="flex items-center gap-3 bg-zinc-900/50 rounded-full px-4 py-2 border border-white/5">
                    <input type="text" placeholder="iMessage" class="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder-zinc-600">
                    <button class="w-8 h-8 bg-[#c773ff] rounded-full flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(chatDiv);
    },

    open: (char) => {
        document.getElementById('chat-name').innerText = char.title;
        document.getElementById('chat-avatar').src = char.img;
        document.getElementById('chat-large-avatar').src = char.img;
        document.getElementById('chat-description').innerText = char.chatDesc;
        document.getElementById('chat-interface').classList.remove('translate-y-full');
    },

    close: () => {
        document.getElementById('chat-interface').classList.add('translate-y-full');
    }
};

document.addEventListener('DOMContentLoaded', ChatUI.init);
