<template>
  <div id="app">
    <div class="nav-bar" style="color: #fff"> {{ user }} </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  computed: {
    user () {
      const { name, email, level } = this.$store.state.user
      return `Bem vindo Usuário ${name} (${email}) - Permissão ${level}`
    }
  }
}
</script>
