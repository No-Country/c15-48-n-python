import perfilJacob from './Profile Jacob.png';
import perfilAlex from './Profile Alex.png';
import perfilPugui from './Profile Pugui.png';

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
    }
]

export default perfiles;