(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-706ec01e"],{"07ac":function(e,t,r){var n=r("23e7"),a=r("6f53").values;n({target:"Object",stat:!0},{values:function(e){return a(e)}})},"0ee9":function(e,t,r){"use strict";r("6481")},6481:function(e,t,r){},"6f53":function(e,t,r){var n=r("83ab"),a=r("df75"),i=r("fc6a"),s=r("d1e7").f,o=function(e){return function(t){var r,o=i(t),c=a(o),d=c.length,u=0,l=[];while(d>u)r=c[u++],n&&!s.call(o,r)||l.push(e?[r,o[r]]:o[r]);return l}};e.exports={entries:o(!0),values:o(!1)}},c59f:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("main",{staticClass:"container"},[e.searchMode?r("card-grid",{attrs:{cards:e.searchCopy}}):r("card-grid",{attrs:{cards:e.cardsCopy}}),this.loading||this.loadingSearch?r("div",{staticStyle:{"margin-top":"2rem"}},[r("div",{staticClass:"loader"},[e._v("Loading...")])]):e._e()],1),r("div",{ref:e.loadMoreID,staticClass:"loadMore",attrs:{id:e.loadMoreID}})])},a=[],i=r("1da1"),s=r("2909"),o=r("5530"),c=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("ac1f"),r("841c"),r("07ac"),r("2f62")),d={components:{CardGrid:function(){return r.e("chunk-4763367a").then(r.bind(null,"7a42"))}},props:{title:{type:String,required:!1},searchMode:{type:Boolean,required:!0},loadingSearch:{type:Boolean,required:!1}},data:function(){return{loading:!1,registered:!1,loadingMore:!1,loadMoreElement:Element}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["cards","search"])),{},{cardsCopy:function(){return this.cards?Object(s["a"])(this.cards["all"].cards):[]},searchCopy:function(){return this.search?Object(s["a"])(Object.values(this.search.cards)):[]},loadMoreID:function(){return"loadMore-all"},pageNumber:function(){return this.cards["all"].page||1}}),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["getCards"])),{},{showLoading:function(){this.loading=!0},hideLoading:function(){this.loading=!1},loadCards:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingMore=!0,this.showLoading(),e.next=4,this.getCards({rarity:"all",pageNumber:this.pageNumber});case 4:this.hideLoading(),this.loadingMore=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),registerObservers:function(){var e=this;if(!this.registered){var t={threshold:.7},r=new IntersectionObserver((function(t){t[0].isIntersecting&&!e.loadingMore&&e.loadCards("all")}),t);r.observe(this.loadMoreElement)}},setLoadingElement:function(){this.loadMoreElement=this.$refs[this.loadMoreID]},init:function(){this.setLoadingElement(),this.registerObservers()}}),created:function(){this.showLoading()},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.searchMode?e.hideLoading():e.init();case 1:case"end":return t.stop()}}),t)})))()}},u=d,l=(r("0ee9"),r("2877")),h=Object(l["a"])(u,n,a,!1,null,"bef2b7c4",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-706ec01e.5e097036.js.map