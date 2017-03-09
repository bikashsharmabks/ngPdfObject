ngPdfObject
=============

Angular directive for PDF Object to embed pdf in angular page

```html
<div ng-pdf-object url="../pdf/sample.pdf" width="100%" height="100%"></div>
```
* url (mandatory)= url for pdf source
* width (optional) = can be in percentage like 100% or pixel like 500px
* height (optional) = can be in percentage like 100% or pixel like 500px

## Dependencies
required: pdfobject.min.js

Include these lines in your index.html
```html
<script src="bower_components/pdfobject/pdfobject.min.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
```
