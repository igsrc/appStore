export default{
    data(){
        return{
            corEtiqueta: '',
            corBtn: '',
            statusBtn: '',
        }
    },
    methods: {
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
        setCorBtn(produtoStatus){
            if((produtoStatus.status == 'Desativado') && (produtoStatus.contrato == false)){
                this.statusBtn = 'Contratar';
                return this.corBtn = 'success';
            }else if((produtoStatus.status == 'Desativado') && (produtoStatus.contrato == true)){
                this.statusBtn = 'Ativar';
                return this.corBtn = 'warning';
            }else{
                this.statusBtn = 'Desinstalar';
                return this.corBtn = 'danger';   
            }
        },
        getProdutoImagen(produtoId){
            return require('@/assets/'+produtoId +'.png');
        }        
    }
}