<template>
  <v-app>
    <v-layout justify-center>
      <v-app-bar
        color="transparent"
        app
        flat
      >
        <div
            :class="{'display-5 font-weight-medium': $vuetify.breakpoint.smAndUp,'title font-weight-medium': $vuetify.breakpoint.smAndDown, }"
          >FSCREATIVE</div>
        <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click.stop="sheet = !sheet" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <v-toolbar-items class="text-right hidden-sm-and-down" id="menu">
            <v-btn
              text
            ><router-link to="/">Home</router-link></v-btn>
            <v-btn
              text
            ><router-link to="/about">About</router-link></v-btn>
            <v-btn
              text
            ><router-link to="/work">Work</router-link></v-btn>
            <v-btn
              text
            ><router-link to="/blog">Blog</router-link></v-btn>
            <v-btn
              @click="$vuetify.goTo('#contact',options )"
              text
            >Contact</v-btn>
          </v-toolbar-items>
      </v-app-bar>
      <v-bottom-sheet v-model="sheet">
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </v-layout>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>

import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Footer,
  },

  data () {
      return {
        sheet: false,
        items: [
          { title: 'Home', icon: 'mdi-home-variant-outline', link:'/' },
          { title: 'About', icon: 'mdi-account-outline', link:'/about'  },
          { title: 'Work', icon: 'mdi-code-tags', link:'/work' },
          { title: 'Blog', icon: 'mdi-blogger', link:'/blog'  },
        ],
        options: {
          fitToSection: false,
        }
      }
    },
};
</script>

<style scoped>
  a {  
    text-decoration: none;
    color: black;
    background-color: transparent;
  }
</style>
