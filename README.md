# Options

#### tab

type : `selector`, default : `'.tab'`

#### panel

type : `selector`, default : `'.panel'`

#### index

type : `number`, default : `0`

#### callback

type : `Function`

# Apis

#### moveTo

```
var tab = new Tab(document.querySelector('.tabs'), {
    tab : '.tab',
    panel : '.panel',
    index : 1,
    callback : function() {
        
    }
});
tab.moveTo(2);
```

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