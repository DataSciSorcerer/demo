<script setup>
import homeHead from "../../components/homeHead.vue";
import homeMain from "../../components/homeMain.vue"

</script>

<template>
    <div class="container">
        <homeHead></homeHead>
        <homeMain></homeMain>
    </div>
</template>




<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>

