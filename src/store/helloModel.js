import { action, computed } from 'mobx';
import Hello from './helloStore';

class HelloModel{
    @action changeNum(){
        Hello.data++
    }
    @action changeNewNum(data) {
        Hello.newData = data
    }
    @action reset(data){
        Hello.data = data
    }
    
    @computed get total() {
        return Hello.price * Hello.amount
    }

    
}

export default new HelloModel();