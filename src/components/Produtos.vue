<template>
    <div class="mainProdutos">
        <div class="produto" v-for="produto in produtos" :key="produto.id">
            <Produto>
                <b-card-header style="width: 250px; max-width: 250px;"
                align="center"
                :header-bg-variant="setCorEtiqueta(produto.etiqueta)"
                header-text-variant="white">
                    {{produto.etiqueta}}
                </b-card-header>
                <b-card-img :src="getProdutoImagen(produto.id)"  height="130px" style="width: 250px; max-width: 250px;"/>
                <b-card-title class="title">{{produto.nome}}</b-card-title>
                <b-card-sub-title class="subtitle">{{produto.descricao}}</b-card-sub-title>
                <b-card
                align="center"
                style="width: 250px; max-width: 250px;">
                    <b-button :variant="setCorBtn(produto)">{{statusBtn}}</b-button>
                </b-card>
            </Produto>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import metodosMixins from '@/MetodosMixins';
import Produto from './Produto.vue';
export default {
    mixins: [metodosMixins],
    components: {Produto},
    computed:{
        ...mapGetters({
            produtos: 'getProdutos'
        })
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