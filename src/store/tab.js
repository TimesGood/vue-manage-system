
// const item = new ListItem()
// item.name = ''
// item.path = ''
// item.title = ''

export default {
    state: {
        tabs: []
    },
    getters: {
        show(){
            return state.tabs.length > 0
        }
    },
    mutations: {
        delTagsItem(index) {
			this.list.splice(index, 1);
		},
		setTagsItem(data) {
			this.list.push(data);
		},
		clearTags() {
			this.list = [];
		}
    }
}