const db = require('../config/db')

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'visitante'
// }

// db('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => {
//         db.destroy()
//     })

// const perfilSU = {
//     nome: 'root' + Math.random(),
//     rotulo: 'Super Mário'
// }

// db.insert(perfilSU).into('perfis')
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => {
//         db.destroy()
//     })