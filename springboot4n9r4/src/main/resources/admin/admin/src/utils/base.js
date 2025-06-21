const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot4n9r4/",
            name: "springboot4n9r4",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "4S店车辆管理系统"
        } 
    }
}
export default base
