"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const typeorm_1 = require("typeorm");
let Model = class Model extends typeorm_1.BaseEntity {
    id;
    name;
    serie;
    engine_id;
    brand_id;
    category;
    horsepower;
    torque;
    weight;
    productions_year;
    stats_id;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
], Model.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "serie", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "engine_id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "horsepower", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "torque", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "productions_year", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Model.prototype, "stats_id", void 0);
Model = __decorate([
    (0, typeorm_1.Entity)({ name: "model" })
], Model);
exports.Model = Model;
//# sourceMappingURL=model.model.js.map