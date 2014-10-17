
Forms
===

There are two ways to configure forms on Material

Declarative
---
The web server should use redirect and use the text/html in the header.
The HTML should be of declaration of the input elements to be used.

**Example**

```
<div class="material-form">
  <div class="material-input" name="somename" value="somevalue"
      type="tel"></div>
</div>
```

In the above example a single input will be created.

Imperative
---
The server should respond directly with application/json header and
return valid JSON file.

**Example**
```
"material-form": [
  "material-input": {
    "id": 1,
    "type": "tel",
    "name": "somename",
    "value": "somevalue"
  }
]
```

In this example the same input will be created as the above one.


Details
---
The form elements are always DIV elements with the following classes
declaring the type and the details of each input:

- material-input - a single line text input
- material-toggle - toggles are bit values, only on and off
- material-range - a numerical range
- material-select - a select box
- material-textarea - a text area



###material-input

The input is described with the following properties:

**id** requered, should be an integer

**name** optional, if the server can understand JSON the name can be ommited
and the ID will be used. If the server expects regular form submission
(i.e. URL encoded values) the property should be provided

**type** optional, determines the type of the input. Can be one of the following:

- text
- password
- tel
- email
- number

If not provided the *text* type will be used.

**value** Determines the initial value of the item. If the
*imperative* method of initialization is used it is required
even if it is empty for the model to work correctly.

**pattern** optional, if provided will be used to validate the
user provided value. If it is not provided but the type is set
to *tel*, *number* or *email* the corresponding automatic
checks will be performed to validate the input

When the input is provided declaratively the ID is not required
and will be automatically generated if needed. Note that the form
declaration is not nessesarily bound to the type of form submission
that will be used, but the same type is assumed, which means that
if the form was created declaratively, the urlencoded method will
be used if no configuration is provided and when the imperative
mode of creation is used the form will be submitted as json if
nothing else is stated in the configuration.



