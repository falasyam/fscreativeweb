<template>
    <v-layout>
        <v-container fill-height>
            <h1 class="display-1 pa-1 font-weight-bold" align="center" justify="center">Blog</h1>
            <v-divider class="ma-5"></v-divider><br/>
            <div class="py-12"></div>
            <v-row no-gutters>
                <v-col cols="8" md="8" lg="8" xs="12" sm="12" class="mx-auto">
                    <v-card elevation="0">
                        <div v-for="post in posts" :key="post.meta.id">
                            <router-link :to="`/blog/${post.fields.slug}`">
                            <v-img
                                class="black--text align-end"
                                height="200px"
                                width="400"
                                :alt="post.fields.title" :src="`${post.fields.image[0].fields.file.url}?w=840&h=400&fit=crop`"
                            >
                            <v-card-title>{{ post.fields.title }}</v-card-title>
                            </v-img>
                            </router-link>
                            <div class="py-2"></div>
                            <v-divider
                            ></v-divider>
                            <div class="py-4"></div>
                        </div>
                    </v-card>
                </v-col>
                <div class="py-4"></div>
                <v-btn v-if="totalPosts > posts.length" @click="getPosts">
                    {{loading ? 'Loading...' : 'Load more posts'}}
                    </v-btn>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
  import { comfortable } from '@/comfortable.js'

  export default {
    name: 'Blog',
    data() {
      return {
        posts: [],
        author: null,
        totalPosts: 0,
        loading: false,
      }
    },
    methods: {
      getPosts() {
        this.loading = true;

        const options = {
          embedAssets: true,
          offset: this.posts.length
        };

        comfortable.getCollection('blogpost', options)
        .then(result => {
          this.posts.push(...result.data);
          this.totalPosts = result.meta.total;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          throw err;
        })
      }
    },
    created() {
      this.getPosts();
    }
  }
</script>

<style scoped>
  a {  
    text-decoration: none;
    color: black;
    background-color: transparent;
  }
</style>