# ToastComponent

This will show up a message that can be closed. Useful for succes and error notifications.
Its also possible to have the message auto hide in a preset time.


## Usage
```html
<toast-component
  v-show="showOrHideBoolean"
  message="This is a toast"
  type="info"
  :autoHideOnType="['info', 'succes']"
  :autoHideTime="5000"
  @toastCloseBtnClicked="isAutoHideToastShown = false"
></toast-component>
```
## Parameters
|parameter|type|description|
|---|---|---|
|*message*|string|Text to show
|*type*|string|A valid bootstrap 4 type
|*autoHideOnType*|array of strings|Hide the toast automatically if selected type is in array
|*autoHideTime*|msec|Auto hide timing, defaults to 10 seconds
|*toastCloseBtnClicked*|callback|'Close' event handler

---
[back](../README.md)
