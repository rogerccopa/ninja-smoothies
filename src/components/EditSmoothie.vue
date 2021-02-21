<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit {{smoothie.title}} Smoothie</h2>
    </div>
</template>

<script>
import db from '@/firebase/init';

export default {
    name: 'EditSmoothie',
    data(){
        return {
            smoothie: null
        }
    },
    created(){
        let slug = this.$route.params.smoothie_slug;
        let docRef = db.collection('smoothies').where("slug","==",slug);
        docRef.get().then(snapshot =>{
            snapshot.forEach(doc => {
                this.smoothie = doc.data();
                this.smoothie.id = doc.id;
            })
        })
    }
}
</script>

<style>

</style>