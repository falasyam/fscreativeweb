<template>
  <v-app>
    <v-layout justify-center>
      <v-app-bar
        color="transparent"
        elevation="0"
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
              @click="$vuetify.goTo('services',options )"
              text
            >Service</v-btn>
            <v-btn
              @click="$vuetify.goTo('#team',options )"
              text
            >Team</v-btn>
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
      </v-bottom-sheet>
    </v-layout>

    <v-main>
      <Home/>
      <Services/>
      <Team/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Team from './components/Team';

export default {
  name: 'App',

  components: {
    Home,
    Services,
    Team,
    Footer
  },

  data () {
      return {
        sheet: false,
        items: [
          { title: 'Home', icon: 'mdi-home' },
          { title: 'Services', icon: 'mdi-code-tags' },
          { title: 'Team', icon: 'mdi-account',  },
        ],
        options: {
          fitToSection: false,
        }
      }
    },
};
</script>
