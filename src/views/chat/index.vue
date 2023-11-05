<script setup>
// import { login_register } from '../../store/loginRegisterStore';
// const useLoginRegister = login_register()
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
                <a class="btn btn-ghost normal-case text-xl"></a>
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

        <div class="main px-5 flex-1 overflow-auto mb-4">
            <div class="chat chat-start">
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img src="../../assets//img/user.png" />
                    </div>
                </div>
                <div class="chat-header font-[600]">
                    ChatGpt
                </div>
                <div class="chat-bubble">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia consectetur, numquam
                    quod temporibus quis fugit ad sunt consequatur nesciunt facere, deleniti accusantium obcaecati? Quo qui
                    eos veritatis obcaecati facilis doloribus sapiente, nemo ratione tempora tenetur nobis adipisci, aut
                    repellat labore rerum, fuga perspiciatis deserunt maiores. Harum esse accusantium perspiciatis laborum
                    saepe alias fugit blanditiis asperiores? Earum recusandae dolore vitae aliquam? Fugiat, dignissimos
                    unde? Quae neque temporibus incidunt eius excepturi magni saepe ipsa veniam sint corrupti, numquam harum
                    placeat doloribus, ipsum in! Dignissimos impedit possimus eum cum, totam voluptatem ipsam aperiam
                    pariatur nihil. Et blanditiis beatae laborum tempora voluptas dolor dolorum?</div>
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
            <div class="fromContainer px-4">
                <input type="text" placeholder="Search…" class="input input-bordered w-full mr-2" />
                <button class="btn btn-circle">
                    <icon-send size="24" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fromContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>