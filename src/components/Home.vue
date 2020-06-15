<template>
    <v-container
        fluid
    >
        <br>
        <v-row align="center" justify="center">
            <v-img 
                :src="require('../assets/under.jpg')"
                contain
                height="400"
                width="300"
            />
        </v-row>
        <v-col class="mb-4" align="center" justify="center">
          <h1 class="display-2 font-weight-bold mb-3">
            Under Construction
          </h1>

          <p class="subheading font-weight-regular">
            Follow our Social Media <br>
            <v-btn class="ma-2" outlined color="red" href="http://instagram.com/fscreative.id">
                Instagram
            </v-btn>
          </p>
        </v-col>
    </v-container>
</template>

<style scoped>
 a {  text-decoration: none;}
</style>