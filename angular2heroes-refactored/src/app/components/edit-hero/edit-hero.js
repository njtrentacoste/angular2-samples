var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var EditHeroComponent = (function () {
    function EditHeroComponent() {
    }
    EditHeroComponent = __decorate([
        angular2_1.Component({
            selector: 'edit-hero',
            properties: ['hero']
        }),
        angular2_1.View({
            templateUrl: 'app/components/edit-hero/edit-hero.html',
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], EditHeroComponent);
    return EditHeroComponent;
})();
exports.EditHeroComponent = EditHeroComponent;
//bootstrap(EditHeroComponent); 
//# sourceMappingURL=edit-hero.js.map