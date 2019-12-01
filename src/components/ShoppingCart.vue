<template>
<div class="product">
  <div class="product-image">
    <img :src="imagem"/>
  </div>
  <div class="product-info">
    <h1>{{ product }}</h1>
    <p>{{imagem}}</p>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      imagem: '../assets/logo.png',
      product: 'Socks'
    }
  }
}
</script>
