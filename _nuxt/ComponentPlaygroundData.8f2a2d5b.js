import b from"./TabsHeader.1725a28d.js";import x from"./ComponentPlaygroundProps.2f45085f.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.b20bdb10.js";import{_ as g}from"./ComponentPlaygroundTokens.vue.480a6e8e.js";import{a as D}from"./index.c0a2d57e.js";import{a as V,r as k,o as a,i as C,m as P,u as o,c as m,aj as T,l,x as j}from"./entry.2b8f4b8e.js";import"./ProseH4.8aef7815.js";import"./ProseCodeInline.7098098b.js";import"./Badge.ed7b4b0f.js";import"./ContentSlot.42ae6052.js";import"./ProseP.db355e6f.js";const B={class:"component-playground-data"},I=V({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const n=D(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=s=>e.value=s;return(s,c)=>{const u=b,_=x,i=v,f=g;return a(),C("div",B,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":c[0]||(c[0]=y=>T(n)?n.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):l("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):l("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):l("",!0)])}}});const z=j(I,[["__scopeId","data-v-945c9d3a"]]);export{z as default};