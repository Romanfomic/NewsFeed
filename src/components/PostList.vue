<template>
    <div v-for="post in posts" v-bind:key="post.id">
        <div class="post-item">
            <strong class="postTitle">{{ post.title }}</strong>
            <div class="postBody">{{ post.body }}</div>
            <button>Смотреть</button>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }

</script>

<style scoped>
    .post-item {
        border: 1px solid black;
        padding: 10px;
    }
</style>