<script setup>
import { homeItemStore } from "../store/homeStore"
import fuse from "fuse.js"
 

const useHomeItemStore = homeItemStore();


//search
const fuseOptions = {
    keys: [
        // "title",
        // "desc"
    ],
}
const fuseSearch = new fuse(useHomeItemStore.item, fuseOptions)
const searchItemAction = () => {
    // let fuseResponse = fuseSearch.search("作曲")
    // console.log(fuseResponse)
}
</script>

<template>
    <div class="main px-5 pb-20 pt-1">
        <div class="from-container">
            <input type="text" placeholder="Search…" class="input input-bordered w-full mr-2" />
            <button class="btn btn-circle" @click="searchItemAction">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div class="tabsContainer">
            <div class="tabs mt-3 inline-block" v-for="itemValue in useHomeItemStore.all.items" :key="itemValue.itemIndex">
                <a @click="useHomeItemStore.changeTab(itemValue.itemIndex)" class="tab tab-active"
                    v-if="useHomeItemStore.all.nowShow === itemValue.itemIndex">{{ itemValue.title }}</a>
                <a @click="useHomeItemStore.changeTab(itemValue.itemIndex)" class="tab" v-else>{{ itemValue.title }}</a>
            </div>
        </div>
        <div class="templets mt-3">
            <div class="card bg-base-200 item"
                v-for="itemValue in useHomeItemStore.all.items[useHomeItemStore.all.nowShow].item" :key="itemValue.id">
                <div class="card-body items-center text-center p-4">
                    <h2 class="card-title">{{ itemValue.title }}</h2>
                    <p>{{ itemValue.desc }}</p>
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
    grid-auto-flow: dense;
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

.tabsContainer {
    /* background: #000; */
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
}

.tabsContainer::-webkit-scrollbar {
    height: 0;
}
</style>
