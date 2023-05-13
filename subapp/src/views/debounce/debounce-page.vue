<template>
  <div class="test">
    <h1>debounce</h1>
    <div>
      <div >nomal</div>
      <input @input="handleChange">
      <div>
        <span>value:</span>
        <span>{{inputValue}}</span>
      </div>
    </div>
    <div>---------------------------</div>

    <div>
      <div>ref</div>
      <input v-model="inputRefValue">
      <div>
        <span>ref-value:</span>
        <span>{{inputRefValue}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import {debounce} from './debounce.js'

// ref
// import { ref } from 'vue'
// const inputRefValue =  ref("")

import { refDebounce } from './refDebounce.js'
const inputRefValue =  refDebounce("")
console.log('inputRefValue ==', inputRefValue)

export default {
  components: {},
  data () {
    return {
      inputValue: '',
      inputRefValue: inputRefValue
    }
  },
  methods: {
    addData () {
    },
    handleChange (value) {
      // console.log('handleChange ==', value)
      // console.log('debounce =', debounce)
      // var _that = this
      // const upDate = (e) => {
      //   console.log('upDate ==', e)
      //   this.inputValue = e.target.value
      // }

      debounce(this.upDate, 1000)(value)
    },
    upDate (e) {
      console.log('upDate ==', e)
      this.inputValue = e.target.value
    },
    refHandleChange (value) {
      console.log('refHandleChange ==', value)
      // console.log('ref ==', ref)
      // console.log('this.$ref.myRef ==', this.$refs.myRef.value)
    }
  },
  watch: {
  },
  mounted () {
    console.log('------------- debounce ------------')



  }
}
</script>
