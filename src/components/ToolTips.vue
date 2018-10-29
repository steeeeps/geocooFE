<template>
    <div>
        <a href="#" id="supportedformats" class="a"> 
            <h2>支持的数据格式</h2>
        </a>
        <v-data-table :headers="formatHeaders" :items="formatItems" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{props.item.type}}</td>
                <td class="text-xs-left">{{props.item.extname}}</td>
                <td class="text-xs-left">{{props.item.note}}</td>
            </template>

        </v-data-table>

        <a href="#" id="supportedsrs" class="a">
            <h2>支持的坐标系</h2>
        </a>
        <div class="srslinks">
                <a href="gcs.html" target="_blank">地理坐标系</a>
                 
                <a href="pcs.html" target="_blank">投影坐标系</a>
        </div>
        
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formatHeaders: [{
                    text: "数据类型",
                    align: "left",
                    sortable: false,
                    value: "数据类型"
                }, {
                    text: "数据格式",
                    align: "left",
                    sortable: false,
                    value: "数据格式"
                }, {
                    text: "备注",
                    align: "left",
                    sortable: false,
                    value: "备注"
                }],
                formatItems: [{
                    type: "ESRI Shapefile",
                    extname: ".zip",
                    note: "需要将相关的.shp,.dbf,.shx等文件打包为.zip 压缩包上传"
                }, {
                    type: "GeoJSON",
                    extname: ".geojson",
                    note: "-"
                }, {
                    type: "CSV",
                    extname: ".csv",
                    note: "csv 文件中需要包括 x,y 或者 lon,lat 字段"
                }, {
                    type: "DXF",
                    extname: ".dxf",
                    note: "-"
                }, {
                    type: "MapInfo",
                    extname: ".zip",
                    note: "需要将相关的.tab, .map, .id, and .dat等文件打包为.zip 压缩包上传"
                }]
            }
        }
    }
</script>
<style scoped>
    .a {
        cursor: auto;
        text-decoration: none;
        margin: 40px 0px 15px 0px;
        display: inline-block;
    }
    .srslinks{

    }
    .srslinks a{
        display: block;
    }
</style>