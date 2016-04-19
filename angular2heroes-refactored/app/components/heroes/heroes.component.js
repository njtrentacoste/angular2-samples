System.register(['angular2/core', 'angular2/common', '../../services/heroes.service', '../hero/hero.component', '../edit-hero/edit-hero.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, heroes_service_1, hero_component_1, edit_hero_component_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (heroes_service_1_1) {
                heroes_service_1 = heroes_service_1_1;
            },
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            },
            function (edit_hero_component_1_1) {
                edit_hero_component_1 = edit_hero_component_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(heroesService) {
                    this.heroesService = heroesService;
                    this.title = 'Tour of Heroes';
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroesService.getHeroes()
                        .subscribe(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'heroes',
                        providers: [heroes_service_1.HeroesService],
                        templateUrl: 'app/components/heroes/heroes.html',
                        directives: [common_1.CORE_DIRECTIVES, hero_component_1.HeroComponent, edit_hero_component_1.EditHeroComponent]
                    }), 
                    __metadata('design:paramtypes', [heroes_service_1.HeroesService])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map