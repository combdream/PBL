Component({
    properties:{
        tabs:{
            type:Array,
            value:[]
        }
    },
    methods:{
        //点击事件
        handleItemTap(e){
            //1 获取点击索引
            const {index}=e.currentTarget.dataset;
            //console.log(index);
            //2 触发 父族中的事件 自定义
            this.triggerEvent("tabsItemChange",{index});
        }

    }

})