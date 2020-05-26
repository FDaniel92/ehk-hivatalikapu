import ContainerHeader from '@/components/modules/ContainerHeader/ContainerHeader.vue';

export default {
    name: 'App',
    components: {
        ContainerHeader
    },
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