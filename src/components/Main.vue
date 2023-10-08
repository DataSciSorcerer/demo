<script setup></script>

<template>
    <div class="main px-5 pb-20 pt-1">

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

        <div class="templets mt-3">
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
</template>

<style scoped>
.main {
    flex: 1;
    overflow-y: auto;
}

.templets {
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
}
</style>
