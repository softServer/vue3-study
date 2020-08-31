<template>
    <div>
        <h2><span v-if="user.userName">{{user.userName}}</span>, 欢迎您</h2>
        <h4>{{userSort}}</h4>
        <button @click="$store.commit('userSortAdd')"></button>
    </div>
</template>
<script>
import userApi from '@/api/user'

export default {
  // 传递参数
  props: {
    userPhone: String,
    userPassword: {
      type: String,
      default: '123456'
    }
  },
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log(this.userPhone)
      const params = {
        userType: 1,
        userPhone: this.userPhone == null ? '18602512803' : this.userPhone,
        userPassword: this.userPassword
      }
      const data = userApi.passwdLogin(params)
      data.then(res => {
        this.user = res
      })
      console.log(this.user)
    }
  },
  computed: {
    userSort () {
      return this.$store.state.userSort
    }
  }
}
</script>
