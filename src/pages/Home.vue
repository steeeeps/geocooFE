<template>
    <v-app light>
        <v-content>
            <section>
                <v-parallax :src="bg1">
                    <v-layout column align-center justify-center class="white--text">
                        <h1 class="white--text mb-2 display-1 text-xs-center">Geography could be
                            more simple and cool.</h1>
                        <div class="subheading mb-3 text-xs-center">Powered by Geocoo</div>
                    </v-layout>
                </v-parallax>
            </section>
            <section>
                <v-layout column wrap class="my-5" align-center>
                    <v-flex xs12 sm4 class="my-3">
                        <div class="text-xs-center">
                            <h2 class="headline">常用的空间数据处理工具</h2>
                            <span class="subheading">
                                方便,快捷,无需安装
                            </span>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">cached</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center">格式转换</div>
                                        </v-card-title>
                                        <v-card-text>
                                            常用的空间数据格式转换，支持 Shapefile 、GeoJSON 、DXF 、CSV 、MapInfo 等多种格式数据互转.

                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">explore</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline">坐标转换</div>
                                        </v-card-title>
                                        <v-card-text>
                                            支持多种地理坐标系、投影坐标系转换，例如常见的 WGS84、北京54、西安80、CGCS2000 等多种坐标系互相转换.

                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">work</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center">数据处理工具</div>
                                        </v-card-title>
                                        <v-card-text>
                                            常见的数据处理工具,例如矢量数据合并与切割,不用下载庞大的 GIS 平台,在线即可完成常见的数据处理任务.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </section>

            <section>
                <v-parallax :src="bg2" height="380">
                    <v-layout column align-center justify-center>
                        <div class="headline white--text mb-3 text-xs-center">地球卫星景观图集，展示地球中最引人注目和最神秘的景观集合。</div>
                        <em>Founded on Google Earth View
                            <!-- <a herf="https://earthview.withgoogle.com/" target="_blank">Google Earth View</a> -->
                        </em>
                        <v-btn class="blue lighten-2 mt-5" dark large href="/wallpapers">
                            浏览
                        </v-btn>
                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-container grid-list-xl>
                    <v-layout row wrap class="my-5">
                        <!-- <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Company info</div>
                                </v-card-title>
                                <v-card-text>
                                    
                                </v-card-text>
                            </v-card>
                        </v-flex> -->
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-right">
                                    <div class="headline">联系方式</div>
                                </v-card-title>
                                <!-- <v-card-text>
                                   如果您有更好的建议或疑问，请及时与我联系.
                                </v-card-text> -->
                                <v-list class="transparent">
                                    <!-- <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>777-867-5309</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile> -->
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">place</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>中国, 成都</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>steeeeps@gmail.com</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>
        </v-content>
    </v-app>
</template>
<script>
export default {
    data () {
        return {
            bg1: require("./../assets/2016.jpg"),
            bg2: require("./../assets/wallpaper-section.jpg")
        }
    }
}
</script>