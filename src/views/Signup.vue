<template>
  <div class="signup">
    <FormSignUp @register="register"/>
  </div>
</template>
<script>
import FormSignUp from '@/components/FormSignUp.vue'
import api from '@/api/auth'

export default {
  name: 'Signup',
  components: {
    FormSignUp
  },
  methods: {
    async register (dataForm) {
      try {
        const { data } = await api.signUp(dataForm)
        if (data.code && data.code === 409) {
          alert(data.message)
        } else {
          alert('Te has registrado correctamente')
        }
      } catch (err) {
        if (err.response) {
          throw (err.response)
        } else {
          throw (err)
        }
      }
    }
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
