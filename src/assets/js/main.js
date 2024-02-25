import Handlebars from "handlebars";
const template = Handlebars.compile("Name: {{name}}");
Handlebars.registerPartial('myPartial', '{{prefix}}');

 
console.log(template({ name: "Nils" }));
