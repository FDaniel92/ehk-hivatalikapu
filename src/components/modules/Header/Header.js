export default {
    name: 'Header',
    data: function() {
        return {
            isActive: false,
            listItems: [
                {
                    name: 'Előnyök',
                    scrollTo: '#advantages'
                },
                {
                    name: 'Gépi interface',
                    scrollTo: '#interface'
                },
                {
                    name: 'A rendszer működése',
                    scrollTo: '#system-operation'
                },
                {
                    name: 'Kapcsolat',
                    scrollTo: '#connect'
                }
            ]
        };
    },
    methods: {
        toggleBurgerMenu: function() {
            this.isActive = !this.isActive;
        }
    }
};