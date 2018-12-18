'use strict';

export default class Tab {
    constructor(element, options) {
        if(!element) {
            return;
        }
        options = Object.assign({
            index: 1
        }, options);
        this.element = element;
        this.options = options;
        this.initialize = false;
        this.render();
        
    }
    render() {
        this.tab = this.element.querySelectorAll('.tab');
        this.panel = this.element.querySelectorAll('.panel');
        this.bindHandlers();
        this.selected(this.options.index);
    }
    bindHandlers() {
        const self = this;
        for(let i=0, length=this.tab.length; i<length; i++) {
            self.tab[i].addEventListener('click', function(e) {
                if(i === self.options.index) {
                    return;
                }
                self.selected(i);
                self.unSelected(self.options.index);
                self.options.index = i;
            });
        }
    }
    moveTo(index) {
        if(index === this.options.index) {
            return;
        }
        this.selected(index);
        this.unSelected(this.index);
        this.options.index = index;
    }
    selected(index) {
        const tab = this.tab[index];
        const panel = this.panel[index];
        tab.classList.add('selected');
        tab.setAttribute('aria-selected','true');
        panel.classList.remove('attached');
        panel.setAttribute('aria-hidden','false');
        if(this.options.callback && typeof this.options.callback == 'function' && this.initialize) {
            this.options.callback({
                selectedIndex : index
            });
        }
        this.initialize = true;
    }
    unSelected(index) {
        const tab = this.tab[index];
        const panel = this.panel[index];
        tab.classList.remove('selected');
        tab.setAttribute('aria-selected', 'false');
        panel.classList.add('attached');
        panel.setAttribute('aria-hidden', 'true');
    }
    getTabIndex() {
        return this.options.index;
    }
}