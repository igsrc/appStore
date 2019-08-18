import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modulos: [
      {id: 1,  etiqueta: 'Performance', nome: 'Checkin', descricao: '+ R$ X por colaborador por mês',status: 'Contratar', contrato: false}, //Contratar --STATUS--
      {id: 2,  etiqueta: 'Engajamento', nome: 'Badges & Cards', descricao: 'Gratuito', status: 'Ativar', contrato: true}, //Ativar
      {id: 3,  etiqueta: 'Engajamento', nome: 'Planos de Ação', descricao: 'Gratuito', status: 'Ativar', contrato: true}, //Ativar
      {id: 4,  etiqueta: 'Engajamento', nome: 'Recomendações de conteúdo sob medida', descricao: '+ R$ X por colaborador por   mês', status: 'Contratar', contrato: false}, //Contratar
      {id: 5,  etiqueta: 'Engajamento', nome: 'Posts de Comunicados e Avisos', descricao: '+ R$ X por colaborador por mês', status: 'Desativar', contrato: true}, //Desativar
      {id: 6,  etiqueta: 'Engajamento', nome: 'Suggestion Box', descricao: '+ R$ X por colaborador por mês', status: 'Desativar', contrato: true}, //Desativar
      {id: 7,  etiqueta: 'Engajamento', nome: 'Análise de Comentários', descricao: '+ R$ X por colaborador por mês', status: 'Contratar', contrato: false}, //Desativar
      {id: 8,  etiqueta: 'Cultura',     nome: 'Fitting Cultural', descricao: '+ R$ X por colaborador por mês', status: 'Contratar', contrato: false}, //Contratar
      {id: 9,  etiqueta: 'Relações',    nome: 'Assessments e Recomendações', descricao: 'Gratuito', status: 'Ativar', contrato: false}, //Ativar
      {id: 10, etiqueta: 'Performance', nome: 'Quick Deck', descricao: '+ R$ X por colaborador por mês', status: 'Contratar', contrato: false},   //Contratar  
      {id: 11, etiqueta: 'Performance', nome: 'Evidências & Feedback', descricao: '+ R$ X por colaborador por mês', status: 'Contratar', contrato: false},//Contratar 
      {id: 12, etiqueta: 'Performance', nome: 'Pulsos de Performance', descricao: '+ R$ X por colaborador por mês', status: 'Desativar', contrato: true},     //Contratar
      {id: 13, etiqueta: 'Cultura',     nome: 'Team Fiting', descricao: '+ R$ X por colaborador por mês', status: 'Desativar', contrato: true},     //Contratar
      {id: 14, etiqueta: 'Performance', nome: 'PDI 70:20:10', descricao: '+ R$ X por colaborador por mês', status: 'Desativar', contrato: true},     //Contratar
    ],
  },
  getters:{
    getModulos(state){
      return state.modulos;
    },
    getModuloById: (state) => (id) =>{
      return state.modulos.find(modulo => modulo.id == id);
    },
    getModulosContratados(state){
      return state.modulos.filter(modulo =>{
        return modulo.contratado;
      });
    }
  },
  mutations: {
    alterarStatusModulo(state, payload){
      let modulo = state.modulos.find(modulo => {
        return modulo.id == payload;
      })
      if(modulo.status == 'Ativar'){
        state.modulo.status = 'Desativar';
      }else if (modulo.status == 'Desativar'){
        state.modulo.status = 'Ativar';
      }else
        state.modulo.status = 'Cadastrar';
    }
  },
  actions:{
    alterarStatusModulo(context, payload){
      context.commit('alterarStatusModulo',payload.id);
    }
  }
})
