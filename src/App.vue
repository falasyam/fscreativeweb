<template>
  <v-app>
    <v-layout justify-center>
      <v-app-bar
        color="transparent"
        elevation="0"
        app
      >
        <div
            :class="{'display-5 font-weight-medium': $vuetify.breakpoint.smAndUp,'title font-weight-medium': $vuetify.breakpoint.smAndDown, }"
          >FSCREATIVE</div>
        <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <v-toolbar-items class="text-right hidden-sm-and-down" id="menu">
            <v-btn
              @click="$vuetify.goTo('#about',options )"
              text
            >About</v-btn>
            <v-btn
              @click="$vuetify.goTo('#portfolio',options )"
              text
            >My Work</v-btn>
            <v-btn
              @click="$vuetify.goTo('#contact',options )"
              text
            >Contact</v-btn>
          </v-toolbar-items>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <v-avatar color="red" size="48">
                <span class="white--text headline center">FS</span>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>FSCreative</v-list-item-title>
              <v-list-item-subtitle>Welcome</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
    </v-layout>

    <v-content>
      <Home/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Home from './components/Home';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Home,
    Footer
  },

  data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-home' },
          { title: 'Work/Project', icon: 'mdi-code-tags' },
          { title: 'About', icon: 'mdi-account' },
        ],
      }
    },
};
</script>
