<template>
  <v-layout>
    <v-container fill-height>
      <h1 class="display-1 font-weight-bold" align="center" justify="center">About Us.</h1>
      <v-divider class="ma-5"></v-divider><br/>
      <v-row no-gutters>
        <span class="text-left font-weight-medium">
          Focused in Creative Agency.
        </span>
      </v-row>
      <div class="py-12"></div>
      <h1 class="display-1 font-weight-bold" align="center" justify="center">Who We Are?</h1>
      <v-divider class="ma-5"></v-divider>
      <v-row no-gutters>
        <span class="text-left">
          FSCreative is Creative Agency Founded in 2019. Starting from just for fun and starting towards clearer directions.
        </span>
        <div class="py-4"></div>
        <v-col cols="9">
          <v-btn outlined>JOIN US</v-btn>
        </v-col>
        <div class="py-8"></div>
      </v-row>
      <h1 class="display-1 font-weight-bold" align="center" justify="center">What We Do?</h1>
      <v-divider class="ma-5"></v-divider>
      <v-row no-gutters>
        <span class="text-left">
          Our mission is to be able to serve customers well.
          We provide services that serve in making poster design, UI design, static web creation, and also serving making Android applications.
        </span>
        <v-col cols="9">
          <v-expansion-panels focusable flat>
            <v-expansion-panel
            >
              <v-expansion-panel-header expand-icon="mdi-menu-down">Our Services</v-expansion-panel-header>
              <v-expansion-panel-content>
                - Poster Design<br/>
                - User Interface Design<br/>
                - Web Static<br/>
                - Android Mobile App
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <div class="py-9"></div>
      </v-row>
      <div class="py-12"></div>
      <h1 class="display-1 font-weight-bold" align="center" justify="center">Our Team</h1>
      <v-divider class="ma-5"></v-divider>
      <v-row no-gutters>
        <v-col cols="12" class="pa-1">
          <v-card outlined class="mx-auto">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">Fala Syam</v-list-item-title>
                <v-list-item-content>Designer, Developer</v-list-item-content>
              </v-list-item-content>

              <v-list-item-avatar
                size="80"
                color="grey"
              ><img src="https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/72533998_425421614805632_8075389882077282304_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ll5UaDaFlQ8AX-7O0Vv&oh=3e2b2bb389fc1846f3599690a7cfa7c9&oe=5F1BD212"/>
              </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn icon href="https://web.facebook.com/falabanaspati.wwooyyooaassiikkjjooss"> <v-icon>fab fa-facebook</v-icon></v-btn>
              <v-btn icon href="https://twitter.com/falasyam"> <v-icon>fab fa-twitter</v-icon></v-btn>
              <v-btn icon href="https://instagram.com/fala.syam"> <v-icon>fab fa-instagram</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
