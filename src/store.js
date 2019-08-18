import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    produtos: [
      {
        id: 1,
        etiqueta: 'Performance',
        nome: 'Checkin',
        descricao: '+ R$ X por colaborador por mês',
        status: 'Desativado',
        contrato: false
      },
      {
        id: 2,
        etiqueta: 'Engajamento',
        nome: 'Badges & Cards',
        descricao: 'Gratuito',
        status: 'Desativo',
        contrato: true
      },
      {
        id: 3,
        etiqueta: 'Engajamento',
        nome: 'Planos de Ação',
        descricao: 'Gratuito',
        status: 'Desativado',
        contrato: true
      },
      {
        id: 4,
        etiqueta: 'Engajamento',
        nome: 'Recomendações de conteúdo sob medida',
        descricao: '+ R$ X por colaborador por   mês',
        status: 'Desativado',
        contrato: false
      }, 
      {
        id: 5,
        etiqueta: 'Engajamento',
        nome: 'Posts de Comunicados e Avisos',
        descricao: '+ R$ X por colaborador por mês',
        status: 'Ativado',
        contrato: true
      }, 
      {
        id: 6,
        etiqueta: 'Engajamento',
        nome: 'Suggestion Box', 
        descricao: '+ R$ X por colaborador por mês',
        status: 'Ativado', 
         contrato: true
      }, 
      {
        id: 7,
        etiqueta: 'Engajamento',
        nome: 'Análise de Comentários', 
        descricao: '+ R$ X por colaborador por mês',
        status: 'Desativado', 
        contrato: false
      },
      {
        id: 8, 
        etiqueta: 'Cultura', 
        nome: 'Fitting Cultural',
        descricao: '+ R$ X por colaborador por mês',
        status: 'Desativado', 
        contrato: false
      },
      {
        id: 9,
        etiqueta: 'Relações', 
        nome: 'Assessments e Recomendações', 
        descricao: 'Gratuito', 
        status: 'Desativado', 
        contrato: true
      }, 
      {
        id: 10,
        etiqueta: 'Performance', 
        nome: 'Quick Deck', 
        descricao: '+ R$ X por colaborador por mês',
        status: 'Desativado', 
        contrato: false
      },
      {
        id: 11, 
        etiqueta: 'Performance', 
        nome: 'Evidências & Feedback',
        descricao: '+ R$ X por colaborador por mês', 
        status: 'Desativado', 
        contrato: false
      },
      {
        id: 12,
        etiqueta: 'Performance',
        nome: 'Pulsos de Performance', 
        descricao: '+ R$ X por colaborador por mês',
        status: 'Desativado',
        contrato: false
      },     
      {
        id: 13, 
        etiqueta: 'Cultura', 
        nome: 'Team Fiting', 
        descricao: '+ R$ X por colaborador por mês',
        status: 'Desativado',
        contrato: false
      },    
      {
        id: 14, 
        etiqueta: 'Performance', 
        nome: 'PDI 70:20:10',
        descricao: '+ R$ X por colaborador por mês',
        status: 'Desativado', 
        contrato: false
      },
    ]
  },
  getters:{
    getProdutos(state){
      return state.produtos;
    },
    getProdutoById: (state) => (id) =>{
      return state.produtos.find(produto => produto.id == id);
    }
  },
  mutations: {

  },
  actions: {
    
  }
})
