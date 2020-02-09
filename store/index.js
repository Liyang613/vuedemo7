import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
var store = new vuex.Store({
    state: {
        //    变量
        list:[]
    },
    mutations: {
        //    方法
        add(state,obj)
        {
            obj.number = 1;
            var index = state.list.findIndex((v) => {
                return v._id == obj._id;
            })
            if (index == -1) {
                state.list.push(obj);
            }
            else {
                state.list[index].number++;
            }
        },
        jia(state,i)
        {
            state.list[i].number++;
        },
        jian(state, i) {
            state.list[i].number--;
            if(state.list[i].number<=0)
            {
                if(confirm("是否移除")){
                    state.list.splice(i,1);
                }
                else{
                    state.list[i].number=1;
                }
            }
        },
        del(state, i) {
            state.list.splice(i, 1);
        }
    },
    getters: {
        //    计算
    },
    actions: {
        //    异步
    }
})
export default store