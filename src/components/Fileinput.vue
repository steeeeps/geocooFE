<template>
  <div>
    <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
      <v-text-field label="选择文件" @click='pickFile' v-model='fileName' append-icon='attach_file' :rules="[v => !!v || '请选择数据']"></v-text-field>
      <input type="file" style="display: none" ref="fileinput" :accept="accepts" @change="onFilePicked">
    </v-flex>

  </div>
</template>

<script>
  export default {
    name:"fileinput",
    data: () => ({
      dialog: false,
      fileName: ''
    }),
    props: ['accepts'],
    methods: {
      pickFile() {
        this.$refs.fileinput.click()
      },

      onFilePicked(e) {
        const files = e.target.files
        if (files[0] !== undefined) {
          this.fileName = files[0].name
          if (this.fileName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.selectFile = files[0] // this is an image file that can be sent to server...
          })
        } else {
          this.fileName = ''
        }
      }
    }
  }
</script>

<style scoped>
  input[type='file'] {
    position: absolute;
    left: -99999px;
  }
</style>