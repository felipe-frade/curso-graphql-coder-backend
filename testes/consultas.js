const db = require('../config/db')

// db('perfis').then(res => console.log(res))
//     .finally(() => db.destroy())


// db('perfis').select('nome', 'id')
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

// db.select('nome', 'id')
//     .from('perfis')
//     .limit(4).offset(2)
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

db.select('nome', 'id')
    .from('perfis')
    // .where({ id: 2 })
    // .where('id', '=', 2)
    // .where('nome', 'like', 'ad%')
    // .whereNot({ id: 2 })
    .whereIn('id', [1, 2, 3])
    // .first()
    .then(res => console.log(res))
    .finally(() => db.destroy())

