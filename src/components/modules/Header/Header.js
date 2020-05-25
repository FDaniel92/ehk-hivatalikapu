export default {
    data: function() {
        return {
            isActive: false
        };
    },
    methods: {
        toggleBurgerMenu: function() {
            this.isActive = !this.isActive;
        }
    }
};