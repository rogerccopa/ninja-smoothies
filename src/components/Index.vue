<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <i class="material-icons delete" @click="deleteItem(smoothie.id)">delete</i>
      <div class="card-content">
        <h2 class="indigo-text">{{smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ingr,index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ingr}}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{name:'EditSmoothie', params:{smoothie_slug:smoothie.slug}}">
          <i class="material-icons">edit</i>    
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data(){
    return {
      smoothies: []
    }
  },
  methods: {
    deleteItem(id){
      db.collection('smoothies').doc(id).delete()
      .then(() => {
        console.log("Document successfully deleted.");
        this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id;
        });
      })
      .catch(error => {
        console.log("Error deleting document: ", error);
      })
    }
  },
  created() {
    // fetch data from firestore
    db.collection('smoothies').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data(), doc.id);
        let smoothie = doc.data();
        smoothie.id = doc.id;
        this.smoothies.push(smoothie);
      });
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #999;
  font-size: 1.4em;
}
.index .edit{
  position: absolute;
  right: 4px;
  bottom: 4px;
  cursor: pointer;
}
</style>
