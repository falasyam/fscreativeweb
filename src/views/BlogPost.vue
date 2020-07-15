<template>
  <div class="post pa-2 ma-3" v-if="post && author">
    <article>
        <v-card outlined class="pa-2">
            <div class="image">
                <v-img :alt="post.fields.title" :src="`${post.fields.image[0].fields.file.url}?w=1680&h=750&fit=crop`">
                </v-img>
            </div>
        <div class="py-2"></div>  
            <span class="display-1 font-weight-bold">{{ post.fields.title }}</span>
            <div class="py-2"></div>
            <div class="author">
                <img :src="`${author.fields.avatar[0].fields.file.url}?w=30&h=30&fit=crop`" alt="author.fields.name">by {{ author.fields.name }}
            </div>
            <div class="py-2"></div>
            <v-divider></v-divider>
            <div class="py-4"></div>
            <div class="content-wrapper">
                <div class="content" v-html="post.fields.content.html"></div>
            </div>
        </v-card>
    </article>
  </div>
</template>

<script>
  import Comfortable from 'comfortable-javascript';
  import { comfortable } from '@/comfortable.js'
  import _ from 'lodash';

  export default {
    name: 'blogPost',
    data() {
      return {
        post: null,
        author: null,
        rating: 4.5,
      }
    },
    methods: {
      getPost() {
        const options = {
          embedAssets: true,
          includes: 1,
          filters: new Comfortable.Filter()
            .addAnd('slug', 'equal', this.$route.params.slug)
        };

        comfortable.getDocuments(options)
        .then(result => {
          this.post = result.data[0];
          this.author = _.find(result.includes.author, );
        })
        .catch(err => {
          throw err;
        })
      }
    },
    created() {
      this.getPost();
    }
  }
</script>

<style>
  a {  
    text-decoration: none;
  }
  .post .image{
    width: 100%;
  }

  .post .image img{
    width: 100%;
  }

  .post .author img {
    margin-top: 10px;
  }

  .post .author img {
    display: inline-block;
    margin-bottom: -8px;
    margin-right: 10px;
    border-radius: 50%;
  }
</style>