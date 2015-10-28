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
var HeroesService_1 = require('../../services/HeroesService');
var hero_1 = require('../hero/hero');
var edit_hero_1 = require('../edit-hero/edit-hero');
var HeroesComponent = (function () {
    function HeroesComponent(service) {
        this.title = 'Tour of Heroes';
        this.heroes = service.heroes;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    HeroesComponent = __decorate([
        angular2_1.Component({
            selector: 'heroes',
            bindings: [HeroesService_1.HeroesService]
        }),
        angular2_1.View({
            templateUrl: 'app/components/heroes/heroes.html',
            directives: [angular2_1.CORE_DIRECTIVES, hero_1.HeroComponent, edit_hero_1.EditHeroComponent]
        }), 
        __metadata('design:paramtypes', [HeroesService_1.HeroesService])
    ], HeroesComponent);
    return HeroesComponent;
})();
exports.HeroesComponent = HeroesComponent;
//bootstrap(HeroesComponent, [HeroesService]); 
//# sourceMappingURL=heroes.js.map