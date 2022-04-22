<template>
  <!-- <div class="panel panel-primary">
        <h1 class="font-bold text-center text-lg p-4">SHOPPING Bscket</h1> 
        <div class="container additem-search mt-3 flex justify-center">
       <button @click="this.$router.push('/additem')" class="bg-gray-500 rounded-full py-2 px-8 
       mr-10 text-white font-bold">Add Item</button>
      
       </div>
      
       <h1 class="font-bold text -center text-lg p-4 mt-5">Items List</h1>
       <div class="container">
           <div class="container list-header flex  mx-auto border bg-gray-500 text-black">
               <span class="font-bold ">Items Names</span>
               
               <span class="font-bold ">Items Price</span>
               
               <span class="font-bold ">Items number</span>
               
           </div>
       </div>
       <div class="container item-actions">
           
           <div v-for="item of items" :key="item?.id" class=" container item-item mt-4 flex justify-between">
               <span class="w-2/3 relative -left-40">{{item?.name}}</span>
               <span class="w-2/3 relative -left-40">{{item?.price}}</span>
               <div class="container actions flex justify-self-end w-1/3 ">
                   
                   <span class="rounded bg-green-400 font-bold 
                   text-white p-2 mx-1  apitalize cursor-pointer hover:bg-gray-600" 
                   @click="this.$router.push('/edititem/'+ item?.id)">Edit item</span>
                   
                   <span class="rounded bg-yellow-400 font-bold 
                   text-white p-2 mx-1  apitalize cursor-pointer hover:bg-gray-600" 
                   @click="this.$router.push('/showitem/'+ item?.id)">show item</span>
                   
                   <span class="rounded bg-red-400 font-bold 
                   text-white p-2 mx-1 capitalize cursor-pointer hover:bg-gray-600" 
                   @click="deleteitem(item?.id)">Delete item</span>
                </div>
            </div>
       
       </div>
  </div> -->
  <div class="main">
    <h1 class="font-bold text-center text-lg p-4">SHOPPING BASCKET</h1> 
        <table style="width:100%">
  <tr>
    <th>ITEM Name</th>
    <th>Item Quantity</th>
    <th>Item Price</th>
  </tr>
  <tr v-for="item of items" :key="item?.id">
    <td>{{item.name}}</td>
    <td>{{item.quantity}}</td>
    <td>{{item.price}}</td>
    <td><button @click="deleteitem(item?.id)"> REMOVE</button></td>
    <td><button @click="this.$router.push('/edititem/'+ item?.id)">EDIT</button></td>
    <td><button  @click="this.$router.push('/showitem/'+ item?.id)">SHOW ITEM</button></td>
  </tr>
  
</table>

<button @click="this.$router.push('/additem')" class="add-button">Add Item</button>
  
</div>
</template>

<script>
export default {
    name:"item-home",
    data(){
    return {
      items:[]
    }
  },
  methods: {
    deleteitem(id) {
      let confirm = window.confirm("Are you sure you want to delete this item?")
     if(confirm){
       let items = localStorage.getItem("items");
          items = JSON.parse(items);
          items = items.filter((item) => item.id !== id);
          localStorage.setItem("items", JSON.stringify(items));
          alert("item deleted successfully");
          window.location.reload();
     }else{
       alert("item not deleted");
     }
    },
     getitems(){
      let items = localStorage.getItem("items");
      if(items){
        this.items = JSON.parse(items);
        if(this.items.length < 1){
          alert("No items available. Please start by adding a new item");
        }
      }else{
        alert("No items available. Please start by adding a new item");
      }
    }
  },
  mounted(){
    this.getitems();
  }
}
</script>
<style>
  
</style>