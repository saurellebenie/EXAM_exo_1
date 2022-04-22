<template>
    <h1>ADD ITEMS</h1>
    <div class="container-main">
        <form class=" rounded p-7 w-4/5 mx-auto flex">
            <div class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3">
                <input  v-model="item.name" type="text" placeholder="name of the item" class="w-full border rounded py-2 px-3 mt-5">
               </div>
             <div class="container flex flex-col justify-center name-desc-prio w-1/2 mx-3">
              <input type="number" placeholder="item quantity" v-model="item.quantity">
              
              
                <input type="text" class="w-full border rounded py-3 px-2 mt-5" name="price" placeholder="price" v-model="item.price">
             <button @click="saveItem()" type="button" class="rounded-full w-full mt-5 px-2 py-3 outine-none bg-green-400 font-bold text-white hover:bg-black ">Add item</button>
             </div>

        </form>
    </div>
</template>
<script>
export default {
    name:'addItem-app',
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
    methods:{
        saveItem(){
            console.log("here is item data", this.item)

             let itemsId= Math.ceil(Date.now());
            console.log("item id:", itemsId);
            
          this.item.id = itemsId;
            
            
           // validation cheker
            let validation=this.validator(this.item);
            if(validation){
               let items= localStorage.getItem('items');
               if(items){
                   items=JSON.parse(items);
                   items.push(this.item);
                  
               } 
               else{
                   items=[];
                   items.push(this.item);
                }
                localStorage.setItem("items", JSON.stringify(items));
                alert("item added successfully");
            }
        },
        validator(item={name:"", quantity:"", price:""}){
            //check item name
            if(item.name.length <1){
                alert("item name is required");
                return false
            }
            // check description
             if(item.quantity.length <1){
                alert("item quantity is required");
                return false
            }
              if(item.price.length <1){
                alert("item price is required");
                return false
            }
           
            // success
            return true;
        }
            
    }
    }    

</script>
