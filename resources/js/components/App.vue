<template>
    
    <div class="content">
        <router-view :key="$route.fullPath"></router-view>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
export default {
}
</script>