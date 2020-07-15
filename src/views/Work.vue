<template>
    <v-layout>
        <v-container fill-height align="left">
            <h1 class="display-1 pa-1 font-weight-bold" align="center" justify="center">Work</h1>
            <v-divider class="ma-5"></v-divider><br/>
            <div class="py-12"></div>
            <v-row no-gutters>
                <v-col cols="12" class="pa-1">
                    <v-card elevation="0" href="http://fscreative.xyz" max-width="1000" class="mx-auto">
                        <v-img
                        src="https://i.ibb.co/4fG4sSP/webfs.png"
                        max-height="400"
                        contain
                        class="grey darken-4 rounded-corner"
                        ></v-img>
                        <v-card-title class="title">FSCreative Web</v-card-title>
                        <v-card-text class="font-weight-medium">Made with VueJS and Vuetify</v-card-text>
                    </v-card>
                </v-col>
                <div class="py-4"></div>
            </v-row>
            <v-divider></v-divider>
            <div class="py-4"></div>
            <v-row no-gutters>
                <div class="py-4"></div>
                <v-col cols="12" class="pa-1">
                    <v-card elevation="0" href="https://instagram.com/persijapday" max-width="1000" class="mx-auto">
                        <v-img
                        src="https://i.ibb.co/9NtpjLY/00-banner.png"
                        max-height="400"
                        contain
                        class="grey darken-4 rounded-corner"
                        ></v-img>
                        <v-card-title class="title">#PersijapDay</v-card-title>
                        <v-card-text class="font-weight-medium">Admin, Designer</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<style scoped>
    .rounded-corner{
        border-radius:5px;
    }
</style>