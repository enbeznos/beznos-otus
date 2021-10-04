const template = document.createElement("template");
template.innerHTML = `<style>
.tree{
  display: block;
}
.tree ul {
  padding-top: 20px; 
  position: relative;
  padding-left: 0px;
  display: flex;
  justify-content: center;
}
.tree li {
  float: left; text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;
}
.tree li::before, .tree li::after{
  content: '';
  position: absolute; 
top: 0; 
right: 50%;
  border-top: 2px solid #ccc;
  width: 50%; 
height: 18px;
}
.tree li::after{
  right: auto; left: 50%;
  border-left: 2px solid #ccc;
}
.tree li:only-child::after, .tree li:only-child::before {
  display: none;
}
.tree li:only-child{ 
  padding-top: 0;
}
.tree li:first-child::before, .tree li:last-child::after{
  border: 0 none;
}
.tree li:last-child::before{
  border-right: 2px solid #ccc;
  border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after{
  border-radius: 5px 0 0 0;
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
}
.tree ul ul::before{
  content: '';
  position: absolute; top: 0; left: 50%;
  border-left: 2px solid #ccc;
  width: 0; height: 20px;
}
li div{
  text-decoration: none;
  color: #666;
  font-family: arial, verdana, tahoma;
  font-size: 11px;
  display: inline-block;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  padding: 20px;
    border: 1px solid;
}
</style>
<div class="tree">
<ul class="root-node">
  <li></li>
</ul>
</div>
`;

class MyTree extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  renderChildsNode(items) {
    const ul = document.createElement("ul");
    
    items.forEach((element) => {
      const li = document.createElement("li");
      const childs = element.items;
      li.innerHTML = `<div>${element.id}</div>`;

      if (childs) {
         li.append(this.renderChildsNode(childs));
      }

      ul.appendChild(li);
    });

    return ul;
  }

  render() {
    if (!this.shadowRoot) {
      return;
    }

    const rn = this.shadowRoot.querySelector("li");
    const titleNode = document.createElement("div");
    titleNode.innerHTML = this.id;
    rn.append(titleNode);
    const childs = this.renderChildsNode(this.items);
    rn.append(childs);
  }
}

export default MyTree;
