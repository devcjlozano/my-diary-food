<template>
  <div class="info-panel">
    <p v-html="mainText"/>
    <slot/>
 </div>
</template>
<script>
export default {
  name: 'InfoPanel',
  props: {
    mainText: {
      type: String,
      default: ''
    },
    showLinkRouter: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.info-panel {
    width: 100%;
    margin-top: 40px;
    max-width: 800px;
    font-size: 1.1em;
    color: white;
    background-color: #00aeaa;
    padding: 20px 30px 40px;
    border-radius: 10px;
}
</style>
