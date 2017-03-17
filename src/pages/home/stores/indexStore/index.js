import {observable, action, computed} from 'mobx';


class observableTodoStore {

    //店铺ID 从VM内获取
    @observable shopId = "111121";

    constructor() {}
}


export const indexStore = new observableTodoStore();
