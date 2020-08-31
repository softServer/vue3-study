<template>
  <div class="about">
    <h1>This is an about page</h1>
    <UserInfo :user-phone="18602512800"/>
  </div>
</template>
<script>
import UserInfo from '@/views/user/userinfo.vue'
export default {
  components: {
    UserInfo
  }
}
</script>
