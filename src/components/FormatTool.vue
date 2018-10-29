<template>
  <div>
    <v-card>
      <v-card-title class="card-title">
        <v-icon dark left style="margin-right:5px;">build</v-icon>数据格式(坐标)转换
      </v-card-title>
      <v-form ref="form" lazy-validation>
        <v-alert v-model="alert.show" :type="alert.type" transition="scale-transition" dismissible>
          {{alert.content}}
        </v-alert>
        <v-flex md10 offset-md1 xs10 offset-xs1>
          <Fileinput ref="fileinput" :accepts="accepts">
          </Fileinput>
          <v-select :items="formats" label="选择转换格式" v-model="params.t_format" required :rules="[v => !!v || '请选择转换格式']">
          </v-select>
          <v-text-field label="源坐标系" placeholder="EPSG:4326" v-model="params.s_srs"></v-text-field>
          <v-text-field label="目标坐标系" placeholder="EPSG:4326" v-model="params.t_srs"></v-text-field>
          <v-switch v-model="params.skipfailures" label="Skip failures"></v-switch>
          <v-btn color="primary" @click="convert" :loading="loading" :disabled="loading">转换</v-btn>
          <v-btn v-if="!!downloadUrl" :href="downloadUrl" outline color="indigo">下载</v-btn>
          <p style="display: flex;align-items: center;">
            <v-icon>info</v-icon><span style="font-size: 12px;color: #808080;">支持矢量数据格式、坐标系转换。支持以下<a href="#supportedformats">数据格式</a>与<a href="#supportedsrs">坐标系</a></span>
          </p>
        </v-flex>

      </v-form>
    </v-card>

  </div>
</template>

<script>
import Fileinput from './Fileinput.vue'
import api from '../api'


export default {
  name: "formatTool",
  components: {
    Fileinput
  },
  data: () => {
    return {
      accepts: ".zip,.dxf,.geojson,.json,.csv",
      params: {
        t_format: '',
        t_srs: '',
        s_srs: '',
        skipfailures: true
      },
      loading: false,
      alert: {
        show: false,
        type: 'success',
        content: ''
      },
      downloadUrl: '',
      formats: ['GeoJSON', 'ESRI Shapefile', 'CSV', 'DXF']
    }
  },

  methods: {
    convert () {
      if (!this.$refs.form.validate()) return
      this.downloadUrl = ''
      this.loading = true
      let formData = new FormData()
      formData.append('data', JSON.stringify(this.params))
      formData.append('file', this.$refs.fileinput.selectFile)
      let self = this

      api.convert(formData, (data) => {
        self.downloadUrl = data.downloadUrl
        self.alert = {
          show: true,
          type: 'success',
          content: data.msg
        }
        self.hideAlert()
        self.loading = false
      }, (data) => {
        self.alert = {
          show: true,
          type: 'error',
          content: '转换出错,请稍候重试!'
        }
        self.hideAlert()
        self.loading = false
      })



    },
    hideAlert () {
      let self = this
      setTimeout(() => {
        self.alert.show = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.card-title {
  font-size: 20px;
  background: #488fef;
  color: #fff;
}
</style>