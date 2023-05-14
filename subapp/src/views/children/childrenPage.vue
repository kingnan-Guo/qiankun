<template>
    <div>
        <div>subapp children</div>
        <!-- <img src="@/assets/asd.jpg" alt="" style="width: 200px;height: 200px;"> -->

    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import {getCurrentInstance} from '@vue/runtime-core'
export default {
    name:"childrenPage",
    setup() {
        let str = ref('children')
        console.log(str)
        console.log('childrenPage ==', this)
        let  currentInstance = ref()
        onMounted(() => {
            currentInstance.value = getCurrentInstance()
            console.log('currentInstance ==', currentInstance)
        });
    },
}
</script>
<!-- <script>
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        console.log('childrenPage ==', this)
    }
}
</script> -->