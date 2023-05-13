<template>
    <div>
        <div>mian home</div>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        let str = ref(3)
        console.log(str)
        console.log('home ==', this)
    },
}
</script>