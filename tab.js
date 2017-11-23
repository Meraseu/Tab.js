/**
 * Tab.js
 * 
 * ie10 higher support.
 * Add polyphile below ie10.
 * 
 * @param element | DOM.
 * @param options.index | Start tab. Default 0.
 * @param options.callback | Click to run callback.
 */

window.Tab = (function (Tab) {

    Tab = function (element, options) {
        if(!element) {
            return;
        }
        this.element = element;
        this.options = options || {};
        this.tab = this.options.tab ? this.element.querySelectorAll(this.options.tab) : this.element.querySelectorAll('.tab');
        this.panel = this.options.panel ? this.element.querySelectorAll(this.options.panel) : this.element.querySelectorAll('.panel');
        this.index = this.options.index || 0;
        this.callback = this.options.callback || function() {};
        this.init();
    }

    Tab.prototype = {
        init : function() {
            this.bindHandlers();
            this.selected(this.index);
        },
        bindHandlers : function() {
            var self = this;
            for(var i=0, length=this.tab.length; i<length; i++) {
                var tab = this.tab[i];
                tab.index = i;
                tab.addEventListener('click', function(e) {
                    var index = e.target.index;
                    if(index === self.index) {
                        return;
                    }
                    self.selected(index);
                    self.unSelected(self.index);
                    self.index = index;
                    if(self.callback) {
                        self.callback();
                    }
                });
            }
        },
        selected : function(index) {
            var tab = this.tab[index];
            var panel = this.panel[index];
            tab.classList.add('selected');
            tab.setAttribute('aria-selected','true');
            panel.classList.remove('hidden');
            panel.setAttribute('aria-hidden','false');
        },
        unSelected : function(index) {
            var tab = this.tab[index];
            var panel = this.panel[index];
            tab.classList.remove('selected');
            tab.setAttribute('aria-selected', 'false');
            panel.classList.add('hidden');
            panel.setAttribute('aria-hidden', 'true');
        }
    }

    return Tab;

})(window.Tab || {});