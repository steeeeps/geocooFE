<template>
    <div>
        <v-card>
            <v-card-title class="card-title">
                <v-icon dark left style="margin-right:5px;">build</v-icon>Shapefile 合并
            </v-card-title>
            <v-form ref="form" lazy-validation>
                <v-alert v-model="alert.show" :type="alert.type" transition="scale-transition" dismissible>
                    {{alert.content}}
                </v-alert>
                <v-flex md10 offset-md1 xs10 offset-xs1><Fileinput ref="fileinput" :accepts="accepts">
                    </Fileinput>

                    <!-- <v-checkbox v-model="params.skipfailures" label="Skip failures" color="primary"></v-checkbox> -->
                    <v-btn color="primary" @click="convert" :loading="loading" :disabled="loading">合并</v-btn>
                    <v-btn v-if="!!downloadUrl" :href="downloadUrl" outline color="indigo">下载</v-btn>
                    <p style="display: flex;align-items: center;">
                        <v-icon>info</v-icon><span style="font-size: 12px;color: #808080;">将需要合并的 Shapefile
                            压缩成.zip格式上传,几何类型必须一致</span>
                    </p>
                </v-flex>

            </v-form>
        </v-card>
    </div>

</template>
<script>
import Fileinput from "./Fileinput.vue";
import api from "../api";

export default {
  name: "mergeTool",
  components: {
    Fileinput
  },
  data: () => {
    return {
      accepts: ".zip",
      loading: false,
      alert: {
        show: false,
        type: "success",
        content: ""
      },
      downloadUrl: ""
    };
  },
  methods: {
    convert() {
      if (!this.$refs.form.validate()) return;
      this.downloadUrl = "";
      this.loading = true;
      let formData = new FormData();
      formData.append("file", this.$refs.fileinput.selectFile);

      let self = this;
      api.merge(
        formData,
        data => {
          self.downloadUrl = data.downloadUrl;
          self.alert = {
            show: true,
            type: "success",
            content: data.msg
          };
          self.hideAlert();
          self.loading = false;
        },
        data => {
          self.alert = {
            show: true,
            type: "error",
            content: "转换出错,请稍候重试!"
          };
          self.hideAlert();
          self.loading = false;
        }
      );
    },
    hideAlert() {
      let self = this;
      setTimeout(() => {
        self.alert.show = false;
      }, 2000);
    }
  }
};
</script>
<style scoped>
.card-title {
  font-size: 20px;
  background: #488fef;
  color: #fff;
}
</style>