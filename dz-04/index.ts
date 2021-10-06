import { orders } from "./data";
import { maxItemAssociation } from "./maxItemAssociation";

const app = <HTMLElement>document.getElementById("app");
app.innerHTML =`<h1>Recommendation list are: ${maxItemAssociation(orders).toString()}</h1>` ;