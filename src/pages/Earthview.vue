<template>
    <div>

        <v-container fluid grid-list-md>
            <v-layout row wrap align-center justify-space-around>
                <v-flex xs12 md3 v-for="v in viewArr" :key="v" :class="{'ma-1': $vuetify.breakpoint.smAndDown, 'ma-4': $vuetify.breakpoint.mdAndUp}">
                    <v-card>
                        <v-img :src="v.thumbUrl" aspect-ratio="1.5"></v-img>

                        <v-card-title primary-title class="card-title">
                            <div>
                                <h3 class="headline mb-0">
                                    <v-icon x-large class="location" @click="openGoogleEarth(v.earthLink)">location_on</v-icon>{{v.region}},{{v.country}}
                                </h3>
                                <div class="attr">{{v.attr}}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn flat color="orange" @click="showLarge(v.fullUrl)">大图</v-btn>
                            <v-btn flat color="orange" @click="download(v.id)">下载</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>
        <p class="more-wrapper">
            <v-btn @click="getData()">More</v-btn>
        </p>

        <v-dialog v-model="dialog" max-width="900">

            <v-img :src="fullUrl" contain aspect-ratio="1.5" max-height="600" max-width="900">
            </v-img>

        </v-dialog>
    </div>
</template>

<script>
import api from "../api";
export default {
    components: {

    },
    data () {
        return {
            page: 1,
            size: 12,
            viewArr: [],
            dialog: false,
            fullUrl: ""
        };
    },
    methods: {
        showLarge (url) {
            this.dialog = true;
            this.fullUrl = url
        },
        getData () {

            let data = {
                // page: this.page,
                size: this.size
            }
            let self = this
            api.randomEarthViews(data, (response) => {
                console.log(response);
                self.viewArr = self.viewArr.concat(response);
                self.page++;
            }, (response) => {
                // console.error(response);
            })
        }, download (id) {
            api.downloadEarthview(id);
        },
        openGoogleEarth (link) {
            window.open(link, "_blank");
        }
    },
    created () {
        this.getData();
    }
};
</script>

<style scoped>
.location {
  color: rgb(76, 199, 196);
}
.attr {
  padding-left: 12px;
}
.card-title {
  padding-bottom: 0px;
}
.more-wrapper {
  text-align: center;
}
.big-image-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.test {
  /* display: block; */
  max-width: 100%;
  max-height: 90%;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
}
</style>
