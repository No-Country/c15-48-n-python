import perfiles_mascotas from './perfiles_mascotas.js';

let pets = perfiles_mascotas;

const humans = [
    {
        id: 1,
        pets: [ pets[0] ],
        name: 'Tamara Sandi',
        email: 'tamara.sandi@gmail.com',
    },
    {
        id: 2,
        pets: [pets[1]],
        name: 'Sergio Musta',
        email: 'sergio.musta@gmail.com',
    },
    {
        id: 3,
        pets: [pets[2]],
        name: 'Nahuel Ledesma',
        email: 'nahuel.ledesma@gmail.com',
    }
]

export default humans;