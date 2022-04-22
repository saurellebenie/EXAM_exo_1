<template>
    <h1>ITEMS</h1>
    <div class="container-main">
        <form class="rounded p-7 w-4/5 mx-auto flex">
            <div class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3">
                <input  v-model="item.name" type="text" placeholder="name of the item" class="w-full border rounded py-2 px-3 mt-5">
               </div>
             <div class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3">
              <input type="number" placeholder="item quantity" v-model="item.quantity">
               <input type="text" class="w-full border rounded py-3 px-2 mt-5" name="price" placeholder="price" v-model="item.price">
              <button @click="this.$router.push('/')" type="button" class="rounded-full w-full mt-5 px-2 py-3 outine-none bg-green-400 font-bold text-white hover:bg-black ">Go Back</button>
             </div>

        </form>
    </div>
</template>

<script>
export default {
    name:'editItem-app',
    data(){
        return{
           item:{
                name:"",
                quantity: "",
                id: "",
                price:""
            }
        }

    },
     mounted() {
    const id = this.$route.params.id;
    const items = JSON.parse(localStorage.getItem("items"));
    this.item = items.find((item) => item.id == id);
  }
    }    

</script>
