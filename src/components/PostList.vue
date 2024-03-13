<template>
    <div v-for="post in posts" v-bind:key="post.id">
        <div class="post-item">
            <strong class="postTitle">{{ post.title }}</strong>
            <div class="postBody">{{ post.body }}</div>
            <div class="postId">Post id: {{ post.id }}</div>
            <router-link :to="{path: 'post', query:{id: post.id}}">link to post</router-link>
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