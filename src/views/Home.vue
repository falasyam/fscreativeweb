<template>
  <div class="section" id="home">
        <div class="section" id="description" justify="center">
        <v-responsive>
        <v-container
            fluid
            class="fill-height"
        >
            <div class="py-9"></div>
            <v-row no-gutters class="pa-3 ma-3">
            <v-col cols="7" md="7" lg="7" xs="12" sm="12" class="">
                <v-spacer></v-spacer>
                <span class="display-1 font-weight-normal" justify="center">
                Hello!
                </span><br/>
                <span class="display-3 font-weight-bold " justify="center">
                We Are Creative Agency.
                </span><br/>
                <div class="py-1"></div>
                <span class="display-5 font-weight-normal hidden-sm-and-down">Better design, better experience.</span><br/>
                <div class="py-2"></div>
                <v-btn outlined><span class="font-weight-bold black--text"><a href="mailto:fscreative.id@gmail.com" class="black--text">Hire Me!</a></span></v-btn>
            </v-col>
            <v-col cols="5" md="5" lg="5" xs="12" sm="12" class="hidden-sm-and-down" justify="center">
                <v-img class="" :src='require("../assets/welcome.png")'/>
                <p class="text--disabled" justify="center" align="center">Illustration by <a href="https://dribbble.com/thierryfousse">Thierry Fousse</a> from <a href="https://icons8.com/">Icons8</a></p>
            </v-col>
            </v-row>
            <div class="py-8"></div>
        </v-container>
        </v-responsive>
        </div>
        <div class="section" id="services">
            <v-responsive>
            <v-container class="fill-height" fluid>
                <h2 class="display-1 pa-3 font-weight-bold" align="center" justify="center">Service</h2>
                <v-row no-gutters>
                    <div class="py-12"></div>
                    <v-col cols="12" lg="4" md="4" justify="center" align="center" class="pa-2">
                        <div class="py-8"></div>
                        <v-card
                            elevation="0"
                        >
                            <v-img class="" width="80" height="80" :src='require("../assets/vector.svg")'/>
                            <v-card-title class="ndasmu">Design</v-card-title>

                            <v-card-text>Poster Design, UI/UX Design. We make your design to the next level. </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" justify="center" align="center" class="pa-2">
                        <div class="py-8"></div>
                        <v-card
                            elevation="0"
                        >
                            <v-img class="" width="80" height="80" :src='require("../assets/paint-roller.svg")'/>
                            <v-card-title class="ndasmu">Front End Developer</v-card-title>

                            <v-card-text>We take your website and App to the next level.</v-card-text>
                        </v-card>
                    </v-col>
                    <div class="py-2"></div>
                    <v-col cols="12" lg="4" md="4" justify="center" align="center" class="pa-2">
                        <div class="py-8"></div>
                        <v-card
                            elevation="0"
                        >
                            <v-img class="" width="80" height="80" :src='require("../assets/layers.svg")'/>
                            <v-card-title class="ndasmu">Android App</v-card-title>

                            <v-card-text>Using Java, Kotlin and Flutter as Framework to make Android App.</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            </v-responsive>
        </div>
        <div class="py-4"></div>
        <div class="section" id="desc">
            <v-responsive>
                <v-container fluid class="fill-height">
                    <v-row no-gutters>
                        <v-col cols="12" class="pa-3">
                            <span class="asbetter font-weight-bold blue--text">Better design, better experience.</span><br/>
                            <span class="display-5 font-weight-bold">
                                As a designer and developer, we understand the perfect user interface should look good and work even better.
                            </span>
                        </v-col>
                    </v-row>
                </v-container>
            </v-responsive>
        </div>
        <div class="py-4"></div>
        <div class="section" id="clients">
            <v-responsive>
                <v-container fluid class="black fill-height">
                    <h1 class="display-1 pa-3 font-weight-bold white--text" align="center" justify="center">Clients Talking</h1>
                    <v-row no-gutters>
                        <v-col cols="12" class="pa-3">
                            <v-carousel cycle show-arrows-on-hover height="400" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus">
                                <v-carousel-item
                                  v-for="slide in slides"
                                  :key="slide"
                                >
                                    <v-sheet height="100%" tile>
                                        <v-row class="fill-height" align="center" justify="center">
                                            <div class="slider pa-4 ma-4">{{slide}}</div>
                                        </v-row>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </v-col>
                    </v-row>
                </v-container>
            </v-responsive>
        </div>
    </div> 
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
      return {
          slides: [
            'Nothing',
            'Nothing',
          ],
      }
  },
}
</script>

<style scoped>
  a {  
    text-decoration: none;
  }

  .asbetter {
      font-size: 22px;
      line-height: 0px;
  }

  .ndasmu {
      font-size: 34px;
      text-align: center;
      justify-content: center;
      align-content: center;
  }

  .display-5 {
      font-size: 25px;
      line-height: 3px;
  }

  .slider{
      font-size: 15px;
  }
</style>
