const STORAGE_KEY = 'vuejs-todolist'
export default {
	fetch: function() {
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)
		 || '[]')
	},
	save:function(items) {
		window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items))
        console.log(STORAGE_KEY)
    }
}
