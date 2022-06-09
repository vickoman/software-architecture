import { ConnectDB  } from './Connection'

const c = ConnectDB.getInstance();
c.connect();

const isSingleton: Boolean = c instanceof ConnectDB;
console.log(isSingleton);