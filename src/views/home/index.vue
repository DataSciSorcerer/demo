<script setup>

</script>

<template>
    <div class="container">
        <div class="head">
            <div class="navbar">
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
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center">
                    <a class="normal-case text-xl font-bold">daisyUI</a>
                </div>
                <div class="navbar-end">
                    <!-- <button class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
        </button> -->
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="../../assets/img/user.png" />
                            </div>
                        </label>
                        <ul tabindex="0"
                            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
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
        <div class="main px-5 pb-[10rem] pt-3">

            <div class="from-container">
                <input type="text" placeholder="Search…" class="input input-bordered w-full mr-2" />
                <button class="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                            clip-rule="evenodd" />
                    </svg>

                </button>
            </div>

            <div class="other mt-3">
                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹小红书文案</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>

                <div class="card bg-base-200 item">
                    <div class="card-body items-center text-center p-4">
                        <h2 class="card-title">🎹作曲</h2>
                        <p>让AI写一首歌。sds让AI写一首歌。让AI写一首歌。让AI写一首歌。</p>
                        <button class="btn btn-primary btn-block">Use</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="foot">
            <div class="btm-nav">
                <button class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
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
    flex-direction: column;
}

.main {
    flex: 1;
    overflow-y: auto;
}

.other {
    column-count: 2;
    /* 设置列数 */
    column-gap: 1rem;
    /* 设置列之间的间隔 */
}

.item {
    margin-bottom: 1rem;
    /* 设置项目之间的垂直间距 */
    break-inside: avoid;
}

.from-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}</style>

