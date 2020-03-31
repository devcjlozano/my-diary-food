<template>
  <div class="signup">
    <FormSignUp
      :mail-exist="mailExist"
      :email-try="emailTry"
      :account-created-success="accountCreatedSuccess"
     @register="register"/>
     <LoadDialog
      :load-dialog="loadingRegister"/>
  </div>
</template>
<script>
import FormSignUp from '@/components/form-sign-up/FormSignUp.vue'
import LoadDialog from '@/components/LoadDialog'
import api from '@/api/auth'

export default {
  name: 'Signup',
  components: {
    FormSignUp,
    LoadDialog
  },
  data () {
    return {
      mailExist: false,
      loadingRegister: false,
      emailTry: '',
      accountCreatedSuccess: false
    }
  },
  methods: {
    async register (dataForm) {
      try {
        this.loadingRegister = true
        const { data } = await api.signUp(dataForm)
        this.loadingRegister = false
        if (data.code && data.code === 409) {
          this.mailExist = true
          this.emailTry = dataForm.email
        } else {
          this.mailExist = false
          this.accountCreatedSuccess = true
        }
      } catch (err) {
        this.loadingRegister = false
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
    background-color: #00aeaa75;
    height: 100%;
    padding: 20px;
  }
</style>
