<template>
   <div>
        <div class="col" style="width:100%">
            <div class="row" style="justify-content:center;">
                <img class="card-image loading-img" :src="card.imageUrl" loading="lazy" @load="loadedImg($event)">
            </div>
            <div class="row" style="width:100%">
                <div class="info" style="width:100%;">
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Name:</span></div>
                        <div class="col">{{card.name}}</div>
                    </div>
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Text:</span></div>
                        <div class="col">{{ card.text }}</div>
                    </div>
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Set:</span></div>
                        <div class="col">{{ card.set.name }}</div>
                    </div>
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Type:</span></div>
                        <div class="col">{{ card.type }}</div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>

export default {
    props:{
        card: {
            type: Object,
            required: true,
        }
    },
    data(){
        return {
            loading: false,
        }
    },
    computed: {
        
    },
    methods: {
        loadedImg: function(e) {
            e.target.classList.remove('loading-img');
            e.target.classList.add('loaded-img');
        }
    },
}
</script>

<style lang="css" scoped>

.card-image {
    height: var(--imageHeight);
    width: var(--imageWidth);
}

.card-info-row {
    margin-bottom: 5px;
}
</style>