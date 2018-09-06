import { observable } from 'mobx';

class Hello {
    @observable data = 1;
    @observable obj = { test: 1 }
    @observable newData = null;
    @observable price = 2;
    @observable amount = 3;    
}

export default new Hello();