<template>
    <v-container>
        <v-layout row wrap align-start justify-space-around fill-height>
            <v-flex xs12 md5>
                <FormatTool></FormatTool>
            </v-flex>
            <v-flex xs12 md5>
                <MergeTool>

                </MergeTool>
            </v-flex>
            <v-flex xs12 md11>
                <ToolTips></ToolTips>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
import FormatTool from '../components/FormatTool.vue'
import MergeTool from "../components/MergeTool.vue"
import ToolTips from "../components/ToolTips.vue"
export default {
    components: {
        FormatTool,
        MergeTool,
        ToolTips

    },
    data: () => {
        return {}
    }
}
</script>

<style scoped>
</style>