import MyTree from './MyTree';
import { tree } from './data';

customElements.define("my-tree", MyTree);

const root = document.createElement("my-tree");
root.id = tree.id;
root.items = tree.items;
document.body.append(root);
