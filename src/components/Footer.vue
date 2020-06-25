<template>
    <v-footer
        color="white"
        padless
        class="font-weight-medium">
            <v-col
                cols="6"
                class="left"
            >
                {{ new Date().getFullYear() }} — <strong>FSCreative</strong>
            </v-col>
            <v-col cols="6" class="text-right">
                <v-btn icon href="https://instagram.com/fscreative.id"> <v-icon>fab fa-instagram</v-icon></v-btn>
                <v-btn icon href="https://www.behance.net/falasyam"> <v-icon>fab fa-behance</v-icon></v-btn>
            </v-col>
    </v-footer>
</template>