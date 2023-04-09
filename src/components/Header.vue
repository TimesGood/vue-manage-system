<template>
	<div class="header">
		<div class="collapse-btn" @click="collapseChage">
			<el-icon><Fold /></el-icon>
		</div>
		
		<div class="header-right">
			<div class="header-user-con">
				<!-- 消息中心 -->
				<div class="btn-bell">
					<el-tooltip
						effect="dark"
						:content="1 ? `有11条未读消息` : `消息中心`"
						placement="bottom"
					>
						<i class="el-icon-lx-notice"></i>
					</el-tooltip>
					<span class="btn-bell-badge" v-if="1"></span>
				</div>
				<!-- 用户头像 -->
				<el-avatar class="user-avator" :size="30"/>
				<!-- 用户名下拉菜单 -->
				<el-dropdown class="user-name" trigger="click">
					<span class="el-dropdown-link">
						超级管理员
						<el-icon class="el-icon--right">
							<arrow-down />
						</el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
								<el-dropdown-item>项目仓库</el-dropdown-item>
							</a>
							<el-dropdown-item command="user">个人中心</el-dropdown-item>
							<el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	}
}

</script>
<style scoped>

</style>
