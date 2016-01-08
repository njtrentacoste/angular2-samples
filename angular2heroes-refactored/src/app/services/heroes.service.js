System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
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
    var core_1, http_1;
    var HeroesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HeroesService = (function () {
                function HeroesService(_http) {
                    this._http = _http;
                    this.hostUrl = 'http://localhost:3000';
                    this.controller = '/heroes';
                    this.baseUrl = this.hostUrl + this.controller;
                }
                HeroesService.prototype.getHeroes = function () {
                    return this._http.get(this.baseUrl)
                        .map(function (res) { return res.json(); });
                };
                HeroesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroesService);
                return HeroesService;
            })();
            exports_1("HeroesService", HeroesService);
        }
    }
});
//# sourceMappingURL=heroes.service.js.map