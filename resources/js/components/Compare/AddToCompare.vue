<template>
    <div class="add-to-compare">
   
        <button class="btn bcustom-secondary" @click="addToCompare"><i class="fas fa-signal" /></button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-compare",
      props: {
        pId: 0,
        pName: String,
        pImage: String,
        pPrice: 0,
        pDescription: String,
        pAmount: 0,
        pCategory: String,
        pColor: String,
        pSpeed: String,
        pFrame: String,
        pWheelSize: String, 
        pWheelSpec: String
      },
  data(){
    return {
      item: {
        id: this.pId,
        image: this.pImage,
        name: this.pName,
        price: this.pPrice,
        description: this.pDescription,
        amount: this.pAmount,
        category: this.pCategory,
        color: this.pColor,
        frame_material: this.pFrame,
        speed: this.pSpeed,
        wheel_size: this.pWheelSize,
        wheel_spec: this.pWheelSpec
      },
    }
  },
  methods:{
    addToCompare() {
      if(this.$store.state.compare.length < 10) {
        $('#list').modal('show');
        this.$store.commit('addToCompare', this.item)
        this.$store.commit('userActivities', this.item)
      }
    },
  },
};
</script>


<style>

</style>