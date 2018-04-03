exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
return knex('minidiscs').del()
 .then(function() {
   // Inserts seed entries
   return knex('minidiscs').insert([
     {id: 1, title: 'Black Hole Sun', artist: 'Soundgarden', genre: 'rock', description: 'Wont ya come', cover_url: 'soundgarden.jpg'},
     {id: 2, title: 'Vs', artist: 'Pearl Jam', genre: 'rock', description: 'Wonderful, awesome, greatness', cover_url: 'pearljam.jpg'},
     {id: 3, title: 'Exciter', artist: 'Depeche Mode', genre: 'alternative', description: 'Alternative rock', cover_url: 'exciter.jpg'}
   ])
   .then(function() {
     // Moves id column (PK) auto-incrementer to correct value after inserts
     return knex.raw("SELECT setval('minidiscs_id_seq', (SELECT MAX(id) FROM minidiscs));")
   })
 })
}
