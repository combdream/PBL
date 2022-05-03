Component({
    properties:{
        tabs:{
            type:Array,
            value:[]
        }
    },
    methods:{
        //点击事件
        habdleItemTap(e){
            //1 获取点击索引
            const {index}=e.currentTarget.dataset;
            //2 触发 父族中的事件 自定义
            this.triggerEvent("tabsItemChange",{index})
        }

    }

})