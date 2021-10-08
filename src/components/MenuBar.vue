<template>
<div class="menu-bar-container">
    <div class="image-container">
        <el-image :src="require('../assets/echelon-logo.png')" ></el-image>
    </div>
    <div class="menu-container">
        <el-menu
            mode="horizontal"
            background-color="#002a3a"
            text-color="#FFFF"
            active-text-color="#e4002b"
        >
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
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { ElSubMenu, ElMenuItem, ElImage, ElRadioGroup, ElRadioButton, ElIcon, ElContainer, ElLink } from 'element-plus';

export default {
    name:'MenuBar',
    components: { ElSubMenu, ElMenuItem, ElImage, ElRadioGroup, ElRadioButton, ElIcon, ElContainer, ElLink },
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
    .menu-bar-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .el-image {
        margin-left: 15px;
    }
    
    .el-menu {
        height: 100%;
        width: 100%;
    }
    
    .el-sub-menu {
        display: flex;
        justify-content: space-between;
    }

    .sub-menu-title, .menu-title, .el-menu {
        font-size: .85rem !important;
    }

    .menu-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: var(--white);
        font-size: 1.15rem;
    }

@media screen and (max-width: 960px) {

}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 600px) {
    .image-container {
        margin-top: 10px;
    }
}
</style>