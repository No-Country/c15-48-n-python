import perfilJacob from './Profile Jacob.png';
import perfilAlex from './Profile Alex.png';
import perfilPugui from './Profile Pugui.png';
import perfilTony from "./PerfilesFigma/6.jpg";
import perfilMisato from "./PerfilesFigma/gatogris.jpeg";
import perfilNevada from "./PerfilesFigma/Conejo.jpeg";

const perfiles = [
    {
        id: 1,
        name: 'Jacob',
        username: 'jacob.thewin',
        human: 'Tamara Sandi',
        followers: 6281,
        followed: 3457,
        date: '12/08/2012',
        profile: perfilJacob,
        type: 'Perro',
        FollowsMe: true,
        FollowedByMe: true
    },
    {
        id: 2,
        name: 'Alex',
        username: 'alex.bulldog',
        human: 'Sergio Musta',
        followers: 2467,
        followed: 1358,
        date: '13/08/2010',
        profile: perfilAlex,
        type: 'Perro',
        FollowsMe: true,
        FollowedByMe: false
    },
    {
        id: 3,
        name: 'Pugui',
        username: 'puguidugui',
        human: 'Nahuel Ledesma',
        followers: 378,
        followed: 101,
        date: '28/12/2016',
        profile: perfilPugui,
        type: 'Perro',
        FollowsMe: false,
        FollowedByMe: true
    },
    {
        id: 4,
        name: 'Tony',
        username: 'tony.stark',
        human: 'Tony Stark',
        followers: 0,
        followed: 0,
        date: '01/01/2010',
        profile: perfilTony,
        type: 'Perro',
        FollowsMe: false,
        FollowedByMe: false
    },
    {
        id: 5,
        name: 'Misato',
        username: 'misato.cat',
        human: 'Romina Rodriguez',
        followers: 13,
        followed: 5,
        date: '22/05/2013',
        profile: perfilMisato,
        type: 'Gato',
        FollowsMe: true,
        FollowedByMe: true
    },
    {
        id: 6,
        name: 'Nevada',
        username: 'nevada_fer',
        human: 'Fernanda Gonzalez',
        followers: 32,
        followed: 53,
        date: '22/05/2013',
        profile: perfilNevada,
        type: 'Conejo',
        FollowsMe: true,
        FollowedByMe: true
    }
]

export default perfiles;