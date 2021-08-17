export default [
    {
        icon: 'mdi-home',
        title: 'Home',
        link: '/',
        children: [],
    },
    {
        icon: 'mdi-cog',
        title: 'Settings',
        children: [
            {
                icon: 'mdi-account',
                title: 'Users',
                link: '/settings/users',
            },
        ],
    },
];

