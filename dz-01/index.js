import { orders } from "./data";
import { maxItemAssociation } from "./maxItemAssociation";
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Recommendation list are: ${maxItemAssociation(orders).toString()}</h1> 
`;
