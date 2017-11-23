# Tab.js

> Tab.js

### Options

#### tab

type : `selector`, default : `'.tab'`

#### panel

type : `selector`, default : `'.panel'`

#### index

type : `number`, default : `0`

#### callback

type : `Function`

# Sample Usage

```
var tab = new Tab(document.querySelector('.tabs'), {
    tab : '.tab',
    panel : '.panel',
    index : 1,
    callback : function() {
        
    }
});
```