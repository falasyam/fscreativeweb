<template>
    <div class="section" id="home">
        <div class="section" id="description" justify="center">
        <v-responsive  width="100vw" height="100vh">
        <v-container
            fluid
            class="fill-height"
        >
            <v-row no-gutters class="pa-5 ma-5">
            <v-col cols="9">
                <v-spacer></v-spacer>
                <span class="display-1 font-weight-normal" justify="center">
                Hello!
                </span>
            </v-col>
            <v-col cols="9">
                <span class="display-3 font-weight-bold " justify="center">
                We Are Creative Service Provider.
                </span>
            </v-col>
            </v-row>
            <div class="py-12"></div>
        </v-container>
        </v-responsive>
        </div>
        <div class="section" id="services">
            <v-responsive width="100vw" height="100vh">
            <v-container class="red fill-height" fluid>
                <h1 class="display-1 pa-3 font-weight-bold" align="center" justify="center">Service</h1>
                <v-row no-gutters>
                    <v-col cols="4" md="4" lg="4" xs="12" sm="12" class="pa-2">
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
                    <v-col cols="4" md="4" lg="4" xs="12" sm="12" class="pa-2">
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
                    <v-col cols="4" md="4" lg="4" xs="12" sm="12" class="pa-2">
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
        </div>
        <div class="section" id="team">
            <v-responsive width="100vw" height="100vh">
                <v-container fluid class="green fill-height">
                <h1 class="display-1 pa-3 font-weight-bold" align="center" justify="center">Team</h1>
                    <v-row no-gutters>
                        <v-col cols="12" class="pa-1">
                            <v-card
                            class="mx-auto"
                            outlined
                            >
                            <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1">Fala Syam</v-list-item-title>
                                <v-list-item-text>Designer</v-list-item-text>
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
                        <v-col cols="12" class="pa-1">
                            <v-card
                            class="mx-auto"
                            outlined
                            >
                            <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1">Fala Syam</v-list-item-title>
                                <v-list-item-text>Developer</v-list-item-text>
                            </v-list-item-content>

                            <v-list-item-avatar
                                tile
                                size="80"
                                color="grey"
                            ></v-list-item-avatar>
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
            </v-responsive>
        </div>
    </div>
</template>