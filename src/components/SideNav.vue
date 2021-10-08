<template>
    <el-menu
        mode="vertical"
        background-color="#002a3a"
        text-color="#FFFFFF"
        active-text-color="#e4002b"
    >
        <el-image 
            :src="require('../assets/echelon-logo.png')" 
            v-if="!isCollapsed"
        >
        </el-image>
            <el-menu-item index="1" class="sub-menu-title">
                <a href="https://echelonstudio.com/" target="_self">Home</a>
            </el-menu-item>
            <el-menu-item index="2" class="sub-menu-title">
                <a href="https://echelonstudio.com/studio" target="_self">Profile</a>
            </el-menu-item>
            <el-menu-item index="3" class="sub-menu-title">
                <a href="https://echelonfit.com/" target="_self">Shop</a>
            </el-menu-item>
            <el-menu-item index="4" class="sub-menu-title">
                <a href="https://echelonstudio.com/" target="_self">Logout</a>
            </el-menu-item>
    </el-menu>
</template>

<script>
import { ref } from 'vue'
import { ElMenu, ElMenuItem, ElImage, ElRadioGroup, ElRadioButton, ElIcon, ElLink } from 'element-plus';

export default {
    name:'SideNav',
    components: { ElMenu, ElMenuItem, ElImage, ElRadioGroup, ElRadioButton, ElIcon, ElLink },
    setup() {
        const isCollapsed = ref(false)
        const handleMenuCollapse = () => {
            isCollapsed.value = !isCollapsed.value
        }

        return { isCollapsed, handleMenuCollapse }
    }
    
}
</script>

<style scoped>
    .el-menu {
        padding: 20px;
        height: 100%;
    }
    .el-image {
        margin-bottom: 20px;
    }
    .menu-title {
        font-size: 2rem;
        font-weight: 600;
    }
    .el-menu-item {
        margin-bottom: 15px;
    }

    .menu-header{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .menu-icon {
        margin-right: 10px;
        color: var(--white);
    }

    .el-menu-item:hover {
        background-color: var(--red);
    }

    a {
        text-decoration: none;
        color: var(--white);
        font-size: 2.5rem;
    }

@media screen and (max-width: 960px) {

}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 600px) {
}
</style>