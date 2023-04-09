<template>
    <!--头部-->
    <common-header />
    <!--左侧-->
    <common-aside />
    <!--主页-->
    <div class="content-box" :class="{ 'main-collapse': isCollapse }">
        <tags />
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>


<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
import Tags from '../components/Tags.vue';
export default {
    name: 'Main',
    components: {
        CommonAside,
        CommonHeader,
        Tags
    },
    computed: {
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>
<style>
.content-box {
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    transition: left .3s ease-in-out;
}
.main-collapse {
    left: 65px;
}
</style>