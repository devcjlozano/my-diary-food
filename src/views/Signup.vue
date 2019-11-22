<template>
  <div class="signup">
    <FormSignUp/>
  </div>
</template>
<script>
import FormSignUp from '@/components/FormSignUp.vue'
export default {
  name: 'Signup',
  components: {
    FormSignUp
  }
}
</script>
<style scoped>
  .signup {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px;
  }
</style>
