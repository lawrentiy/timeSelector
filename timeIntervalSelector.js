Template.timeIntervalSelector.created = function () {
    var obj = Template.parentData(1);
    var params = Template.parentData(0);
    if (obj && params) {
        this.intervalValue = (obj[params.field]);
    } else {
        this.intervalValue = {
            start: {h: 0, m: 0},
            end: {h: 0, m: 0}
        };
    }
};

Template.timeIntervalSelector.events({
    'change .timeSelector': function () {
        var v = Template.instance().intervalValue;
        Template.instance().$('.timeIntervalSelector').trigger({type: 'change', value: v});
        var obj = Template.parentData(1);
        var params = Template.parentData(0);
        if (obj && params) {
            (obj[params.field]) = v;
        }
    }
});

Template.timeIntervalSelector.helpers({
    data: function () {
        return Template.instance().intervalValue;
    }
});