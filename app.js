const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.json([
        {nome: 'Bola De Basquete',
         preco: 'R$100,00',
         nome1: 'Camiseta Warriors',
         preco1: 'R$:150,00',
         nome2: 'Camiseta Lakers',
         preco2: 'R$:70,00'}
    ])
});
app.get('/produto1', (req, res) => {
    return res.json([
        {nome: 'bola de Basquete',
         preco: 'R$100,00',
         desc:'Bola de basquete Oficial, modelo wilson'}
    ])
})
app.get('/produto2', (req, res) => {
    return res.json([
        {nome: 'Camiseta Warriors',
         preco: 'R$150,00',
         desc:'Camiseta original Warriors'}
    ])
})
app.get('/produto3', (req, res) => {
    return res.json([
        {nome: 'Camiseta Lakers',
         preco: 'R$70,00',
         desc:'Camiseta original Lakers'}
    ])
})
app.listen(3000, () => {
    console.log('aberto')
});