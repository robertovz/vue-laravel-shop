<template>
    <div class="add-to-cart">
   
        <button :disabled="(pAmount == 0)" type="button" class="btn bcustom-primary cart-btn" @click="addToCart" value="Add to Cart"> Add to Cart </button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
      props: {
        pId: 0,
        pName: String,
        pImage: String,
        pPrice: 0,
        pAmount: 0,
        activity: "Added to the cart"
      },
  data(){
    return {
      item: {
        id: this.pId,
        activity: this.activity,
        image: this.pImage,
        name: this.pName,
        price: this.pPrice,
        amount: this.pAmount,
        quantity: 1
      },
    }
  },
  methods:{
    addToCart() {
      $('#cart').modal('show');
      this.$store.commit('addToCart', this.item)
      this.$store.commit('userActivities', this.item)
    },
  },
};
</script>


<style>

</style>
