<template>
  <section id="work" class="overflow-hidden">
    <v-responsive width="100vw" height="100vh">
    <v-container class="red fill-height" fluid>
        <div class="py-8"></div>
        <h1 class="display-1 pa-3 font-weight-bold" align="center" justify="center">Our Work</h1>
        <v-row no-gutters>
            <v-col cols="12" class="ma-1 pa-1">
                <v-card
                    color="#385F73"
                    dark
                >
                    <v-card-title class="headline">Design</v-card-title>

                    <v-card-subtitle>Collection all design that we've create</v-card-subtitle>

                    <v-card-actions>
                    <v-btn text @click="$vuetify.goTo('#about', options )">See More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" class="ma-1 pa-1">
                <v-card
                    color="#385F73"
                    dark
                >
                    <v-card-title class="headline">Web</v-card-title>

                    <v-card-subtitle>All Project Web</v-card-subtitle>

                    <v-card-actions>
                    <v-btn text>See More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" class="ma-1 pa-1">
                <v-card
                    color="#385F73"
                    dark
                >
                    <v-card-title class="headline">Flutter</v-card-title>

                    <v-card-subtitle>All Project Flutter</v-card-subtitle>

                    <v-card-actions>
                    <v-btn text>See More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </v-responsive>
  </section>
</template>