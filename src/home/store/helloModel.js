import { action, computed } from 'mobx';
import Hello from './helloStore';

class HelloModel{
    @action changeNum(){
        Hello.data++
    }
    @action changeNewNum(data) {
        console.log(111);
        
        Hello.newData = data
        console.log(Hello.newData);
        
    }
    @action reset(data){
        Hello.data = data
    }
    
    @computed get total() {
        return Hello.price * Hello.amount
    }

    
}

export default new HelloModel();