<template>
    <div>
        <div class="produtos" v-for="produto in produtos" :key="produto.id">
            <Produto>
                <b-card
                :header="produto.etiqueta"
                img-src=""
                :title="produto.nome"
                :sub-title="produto.descricao"
                >
                    <b-button>{{produto.status}}</b-button>
                </b-card>
            </Produto>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Produto from './Produto.vue';
export default {
    components: {Produto},
    computed:{
        ...mapGetters({
            produtos: 'getProdutos'
        })
    }
}
</script>

<style>

</style>