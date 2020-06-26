<template>
  <section id="services">
    <v-responsive width="100vw" height="100vh">
    <v-container class="red fill-height" fluid>
        <h1 class="display-1 pa-3 font-weight-bold" align="center" justify="center">Service</h1>
        <v-row no-gutters>
            <v-col cols="6" md="4" lg="12" xs="12" sm="12" class="pa-2">
                <v-card
                    color="#385F73"
                    dark
                >
                    <v-card-title class="headline">Design</v-card-title>

                    <v-card-text>Poster/UI Design</v-card-text>

                    <v-card-actions>
                    <v-btn icon text href="https://www.behance.net/falasyam"> <v-icon>fab fa-behance</v-icon></v-btn>
                    <v-btn icon href="https://instagram.com/fscreative.id"> <v-icon>fab fa-instagram</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="6" md="4" lg="12" xs="12" sm="12" class="pa-2">
                <v-card
                    color="#385F73"
                    dark
                >
                    <v-card-title class="headline">Web</v-card-title>

                    <v-card-text>Vuejs, Flutter or Native</v-card-text>

                    <v-card-actions>
                    <v-btn icon> <v-icon>fab fa-js-square</v-icon></v-btn>
                    <v-btn icon> <v-icon>fas fa-globe</v-icon></v-btn>
                    <v-btn icon href="https://github.com/falasyam"> <v-icon>fab fa-github</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" md="12" lg="12" xs="12" sm="12" class="pa-2">
                <v-card
                    color="#385F73"
                    dark
                >
                    <v-card-title class="headline">Mobile App</v-card-title>

                    <v-card-text>Android Apps. Base on Flutter, Kotlin or Java</v-card-text>

                    <v-card-actions>
                    <v-btn icon> <v-icon>fab fa-java</v-icon></v-btn>
                    <v-btn icon href="https://github.com/falasyam"> <v-icon>fab fa-github</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </v-responsive>
  </section>
</template>