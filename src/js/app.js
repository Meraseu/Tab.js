import Tab from './components/tab/Tab';

const tab = new Tab(document.querySelector('.tabs'), {
    callback: function(data) {
        console.log(data);
    }
});