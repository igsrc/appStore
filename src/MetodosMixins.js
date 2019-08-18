import  { mapMutations } from 'vuex';
export default{
    data(){
        return{
            corEtiqueta: '',
            corBtn: '',
            statusBtn: '',
        }
    },
    computed:{
        setCorBtn(produtoStatus){
            if((produtoStatus.status == 'Desativado') && (produtoStatus.contratado == false)){
                this.statusBtn = 'Contratar';
                return this.corBtn = 'success';
            }else if((produtoStatus.status == 'Desativado') && (produtoStatus.contratado == true)){
                this.statusBtn = 'Ativar';
                return this.corBtn = 'warning';
            }else{
                this.statusBtn = 'Desinstalar';
                return this.corBtn = 'danger';   
            }
        }
    },
    methods: {
        ...mapMutations(['setAlteracoesProduto']),
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
        acaoBtn(produto){
            this.$store.commit('setAlteracoesProduto', produto);
        },
    },      
}
