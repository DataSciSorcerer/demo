<template>
    <div>
        <dialog id="prosonal" class="modal">
            <div class="modal-box mb-20">
                <div class="stat p-0">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="stat-title" id="party">Chat count</div>
                    <div class="stat-value">0</div>
                    <!-- <div class="stat-desc">Jan 1st - Feb 1st</div> -->
                </div>
                <div class="divider"></div>
                <button class="btn btn-block" onclick="subscription.showModal()">通过订阅......</button>
                <button class="btn  btn-neutral btn-block mt-4">通过广告......</button>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>

        <dialog id="subscription" class="modal">
            <div class="modal-box mb-20">
                <div class="stat p-0">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="stat-title" id="party">Number of purchases</div>
                    <div class="stat-value">{{ range_subscription }}</div>
                    <div class="stat-desc">1RMB=50times</div>
                </div>
                <div class="divider"></div>
                <input type="range" min="0" max="10000" v-model="range_subscription" class="range range-primary" step="250" />
                <div class="modal-action">
                    <button class="btn mr-2 btn-primary">Buy</button>
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn mr-2">Close</button>
                    </form>
                </div>
            </div>
        </dialog>

        <div class="navbar px-0">
            <div class="navbar-start">
                <div class="dropdown">
                    <label class="btn btn-ghost swap swap-rotate">
                        <!-- this hidden checkbox controls the state -->
                        <input type="checkbox" />

                        <!-- hamburger icon -->
                        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        <!-- close icon -->
                        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                        <li><a>Exit</a></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a class="normal-case text-xl font-bold">daisyUI</a>
            </div>
            <div class="navbar-end mr-4">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="../assets//img/user.png" />
                        </div>
                    </label>
                    <ul tabindex="0"
                        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li onclick="prosonal.showModal()">
                            <a class="justify-between">
                                Personal
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      range_subscription: 0, // 初始值
    };
  },
};
</script>
<style scoped></style>
