export default {
	//管理数据
    state: {
        isCollapse: false, //控制菜单的展开与收起
    },
	//修改数据
    mutations: {
        // 修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
    }
}