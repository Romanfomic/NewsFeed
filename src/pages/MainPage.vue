<template>
    <div>
        <PostList :posts="posts"></PostList>
    </div>
</template>

<script>
    import PostList from '@/components/PostList'
    import axios from 'axios'

    export default {
        data() {
            return {
                posts: []
            }
        },
        methods: {
            async fetchPosts() {
                try {
                    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = res.data;
                }
                catch (e) {
                    console.log("Fetch error: " + e);
                }
            }
        },
        mounted() {
            this.fetchPosts();
        },
        name: 'App',
        components: {
            PostList
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
