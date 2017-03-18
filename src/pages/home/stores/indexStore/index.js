import {observable, action, computed} from 'mobx';


class observableTodoStore {

    //店铺ID 从VM内获取
    @observable shopId = "1111211212112";

    constructor() {}
}


export const indexStore = new observableTodoStore();
