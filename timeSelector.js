var defaultParams = {
    defaultMinute: '00',
    defaultHour: '00',
    minuteStep: 15
};

Template.timeSelector.helpers({
    data: function () {
        if (!this.defaultMinute) this.defaultMinute = defaultParams.defaultMinute;
            else this.defaultMinute = '' + this.defaultMinute;
        if (!this.defaultHour) this.defaultHour = defaultParams.defaultHour;
            else this.defaultHour = '' + this.defaultHour;
        if (!_.isNumber(this.minuteStep)) this.minuteStep = defaultParams.minuteStep;
        this.minutes = [];
        var i = 0;
        while (i < 60) {
            this.minutes.push((i > 9 ? '' : '0') + i);
            i += this.minuteStep;
        }
        this.hours = [];
        for (i = 0; i < 24; i++) {
            this.hours.push((i > 9 ? '' : '0')+i);
        }
        return this;
    }
});

Template.timeSelector.rendered = function () {
    var obj = Template.parentData(1);
    if (!obj) return;
    var v = obj[this.data.field];
    var $h = this.$('.h-holder'),
        $m = this.$('.m-holder');

    if (v && v.h != undefined && v.m != undefined) {
        $h.text(v.h < 10 ? "0"+ v.h : v.h);
        $m.text(v.m == 0 ? "00" : v.m);
    }
    else {
        obj[this.data.field] = {h: 0, m: 0};
    }
};

function setValue() {
    console.log('setValue');
    var v = {
        h: 1 * Template.instance().$('.h-holder').text(),
        m: 1 * Template.instance().$('.m-holder').text()
    };
    Template.instance().$('.timeSelector').trigger({type: 'change', value: v});
    var obj = Template.parentData(1);
    var params = Template.parentData(0);
    if (obj && params) {
        (obj[params.field]) = v;
    }
}

Template.timeSelector.events({
    'click .h-selector': function () {
        Template.instance().$('.h-holder').text(this);
        setValue()
    },
    'click .m-selector': function () {
        Template.instance().$('.m-holder').text(this);
        setValue()
    },
    'click .separator': function (e) {
        Template.instance().$('.h-holder').text(defaultParams.defaultHour);
        Template.instance().$('.m-holder').text(defaultParams.defaultMinute);
        $(e.target).blur();
        setValue()
    }
});