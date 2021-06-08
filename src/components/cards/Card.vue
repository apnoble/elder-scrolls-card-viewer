<template>
   <div :class="`${rarityColorClass}-card`">
        <div class="col" style="width:100%">
            <div class="row" style="justify-content:center;">
                <img class="card-image loading-img" :src="card.imageUrl" loading="lazy" @load="loadedImg($event)">
            </div>
            <div class="row" style="width:100%">
                <div class="info" style="width:100%;">
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Name: </span></div>
                        <div class="col">{{card.name}}</div>
                    </div>
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Text: </span></div>
                        <div class="col">{{ card.text }}</div>
                    </div>
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Set: </span></div>
                        <div class="col">{{ card.set.name }}</div>
                    </div>
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Type: </span></div>
                        <div class="col">{{ card.type }}</div>
                    </div>
                    <div class="row card-info-row">
                        <div class="col col-info"><span class="label">Attr: </span></div>
                        <div class="col">{{ attributes }}</div>
                    </div>
                    <div class="row card-info-row shine-on">
                        <div class="col col-info"><span class="label">Rarity: </span></div>
                        <div :class="`col ${rarityColorClass}-text`">{{ card.rarity }}</div>
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
        rarityColorClass: function() {
            let rarity = this.card.rarity.toLowerCase();
            return `col ${rarity}`;
        },
        attributes: function(){
            return this.card.attributes.join(', ');
        }
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

.label {
    color: #999;
    font-size: 0.95rem;
}

.loading-img {
    filter: blur(4px);
    transition: filter 1s;
    background-color:#333;
}

.loaded-img {
    filter: blur(0);
    background-color:transparent;
}

/*  rarity colors */
.legendary-text {
    color: #db9e1d;
}

.epic-text {
    color: #c651b4;
}

.rare-text {
    color: #2897d2;
}

.common-text {
    color: #bcbcb9;
}


.legendary-card {
    border: 2px solid var(--legendary);
}
.epic-card {
    border: 2px solid var(--epic);
}
.rare-card {
    border: 2px solid var(--rare);
}
.common-card {
    border: 2px solid var(--common);
}

/* corner diamond element for rarity */
.legendary-card::after {
    content: "";
    position: absolute;
    margin: -1.145rem;
    width: 3px;
    height: 3px;
    transform: rotate(45deg);
    background-color: var(--legendary); /* to see where it is */
    box-shadow: 0 0 0 10px var(--legendary);
}
.epic-card::after {
    content: "";
    position: absolute;
    margin: -1.145rem;
    width: 3px;
    height: 3px;
    transform: rotate(45deg);
    background-color: var(--epic); /* to see where it is */
    box-shadow: 0 0 0 10px var(--epic);
}
.rare-card::after {
    content: "";
    position: absolute;
    margin: -1.145rem;
    width: 3px;
    height: 3px;
    transform: rotate(45deg);
    background-color: var(--rare); /* to see where it is */
    box-shadow: 0 0 0 10px var(--rare);
}
.common-card::after {
    content: "";
    position: absolute;
    margin: -1.145rem;
    width: 3px;
    height: 3px;
    transform: rotate(45deg);
    background-color: var(--common); /* to see where it is */
    box-shadow: 0 0 0 10px var(--common);
}
</style>