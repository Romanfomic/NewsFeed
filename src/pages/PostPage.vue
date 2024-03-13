<template>
    <div>
        <div class="post-item" v-if="currentPost != 0">
            <strong class="postTitle">{{ post.title }}</strong>
            <br/>
            <br/>
            <div class="postBody">{{ post.body }}</div>
            <div class="postId">Post id: {{ post.id }}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                currentPost: 0,
                post: []
            }
        },
        methods: {
          async fetchPost(id) {
              try{
                  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                  this.post = res.data;
              } catch (e) {
                  console.log("Fetch error: " + e);
              }
          }
        },
        mounted() {
            this.currentPost = this.$route.query.id ? this.$route.query.id : 0;
            if (this.currentPost != 0){
                this.fetchPost(this.currentPost);
            }
        }
    }
</script>

<style scoped>

</style>