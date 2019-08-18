<template>
    <div class="mainProdutos">
        <div class="produto" v-for="modulo in modulos" :key="modulo.id">
            <!-- <Produto> -->
                <b-card-header style="width: 250px; max-width: 250px;"
                align="center"
                :header-bg-variant="setCorEtiqueta(modulo.etiqueta)"
                header-text-variant="white">
                    {{modulo.etiqueta}}
                </b-card-header>
                <b-card-img :src="getProdutoImagen(modulo.id)"  height="130px" style="width: 250px; max-width: 250px;"/>
                <b-card-title class="title">{{modulo.nome}}</b-card-title>
                <b-card-sub-title class="subtitle">{{modulo.descricao}}</b-card-sub-title>
                <b-card
                align="center"
                style="width: 250px; max-width: 250px;">
                    <!-- <b-button :variant="corBtn" @click="acaoBtn(produto)">{{botaoStatus(produto)}}</b-button> -->
                    <b-button size="sm" :variant="setCorBotao(modulo)" @click="alterarModuloStatus(modulo)">{{modulo.status}}</b-button>
                </b-card>
            <!-- </Produto> -->
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
// import metodosMixins from '@/MetodosMixins';
// import Produto from './Produto.vue';
export default {
    // mixins: [metodosMixins],
    // components: {Produto},
    data(){
        return{
            corEtiqueta: '',
            corBtn: '',
        }
    },
    computed:{
        ...mapGetters({
            modulos: 'getModulos'
        }),
    },
    methods: {
        ...mapActions(['alterarStatusModulo']),
        alterarModuloStatus(modulo){
            this.$store.commit('alterarStatusModulo', modulo.id);
        },
         setCorBotao(produto){
            if(produto.status == 'Ativar')
                return this.corBtn = 'warning'
            else if(produto.status == 'Contratar')
                return this.corBtn = 'success';
            else
                return this.corBtn = 'danger'
        },
        setCorEtiqueta(produtoEtiqueta){
            switch (produtoEtiqueta) {
                case 'Performance':
                    this.corEtiqueta = 'success';
                    break;
                case 'Engajamento':
                    this.corEtiqueta = 'primary';
                    break;
                case 'Cultura':
                    this.corEtiqueta = 'warning';
                    break;
                case 'Relações':
                    this.corEtiqueta = 'danger';
                    break;
            }
            return this.corEtiqueta;
        },
        getProdutoImagen(produtoId){
            return require('@/assets/'+produtoId +'.png');
        },
        
    }
}
</script>

<style>
.mainProdutos{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.produto{
    align-content: center;
    margin: 10px 3px 5px 3px;
}
.produto:hover{
    transform: scale(1.01);
}
.title{
    max-width: 250px;
    height: 50px;
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
}
.subtitle{
    max-width: 250px;
    margin-top: 20px;
    font-size: 15px;
    text-align: center;
}
</style>