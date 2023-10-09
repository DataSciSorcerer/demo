<script setup>

</script>

<template>
    <div class="w-full h-screen flex flex-col justify-between">
        <div class="navbar bg-base-100 px-1">
            <div class="flex-none">
                <button class="btn btn-square btn-ghost">
                    <icon-back size="24" />
                </button>
            </div>
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="flex-none">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="main px-5 flex-1">
            <div class="chat chat-start">
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img src="../../assets//img/user.png" />
                    </div>
                </div>
                <div class="chat-header font-[600]">
                    ChatGpt
                </div>
                <div class="chat-bubble">你无需明确指定复数的数字。可以通过预定义的命名参数 {count} 和/或 {n} 在语言环境信息中访问该数字。如有必要，你可以覆盖这些预定义的命名参数。</div>
                <div class="chat-footer opacity-50">
                    12:46:02
                </div>
            </div>
            <div class="chat chat-start">
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img src="../../assets//img/user.png" />
                    </div>
                </div>
                <div class="chat-header font-[600]">
                    ChatGpt
                </div>
                <div class="chat-bubble">Y</div>
                <div class="chat-footer opacity-50">
                    12:46:02
                </div>
            </div>
            <div class="chat chat-end">
                <div class="chat-bubble">I hate you!</div>
                <div class="chat-footer opacity-50">
                    12:46:09
                </div>
            </div>
        </div>

        <div class="send_box mb-4">
            <div class="from-container px-4">
                <input type="text" placeholder="Search…" class="input input-bordered w-full mr-2" />
                <button class="btn btn-circle">
                    <icon-send size="24" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-content: space-between;
    flex-direction: column;
}

.from-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>