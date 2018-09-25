import { observable} from 'mobx';


class store {
  constructor(){};

  @observable pepe= "que culiao!" 
   
 
}

const singleton = new store();
export default singleton;

