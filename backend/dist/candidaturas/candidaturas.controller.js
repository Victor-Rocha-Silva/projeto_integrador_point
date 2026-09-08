"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidaturasController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const client_1 = require("@prisma/client");
const candidaturas_service_1 = require("./candidaturas.service");
let CandidaturasController = class CandidaturasController {
    constructor(candidaturasService) {
        this.candidaturasService = candidaturasService;
    }
    candidatar(user, vagaId) {
        return this.candidaturasService.candidatar(user.userId, vagaId);
    }
    minhasCandidaturas(user) {
        return this.candidaturasService.minhasCandidaturas(user.userId);
    }
    alterarStatus(id, status) {
        return this.candidaturasService.alterarStatus(id, status);
    }
};
exports.CandidaturasController = CandidaturasController;
__decorate([
    (0, common_1.Post)(":vagaId"),
    (0, roles_decorator_1.Roles)(client_1.Role.CANDIDATO),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("vagaId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CandidaturasController.prototype, "candidatar", null);
__decorate([
    (0, common_1.Get)("minhas"),
    (0, roles_decorator_1.Roles)(client_1.Role.CANDIDATO),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CandidaturasController.prototype, "minhasCandidaturas", null);
__decorate([
    (0, common_1.Patch)(":id/status/:status"),
    (0, roles_decorator_1.Roles)(client_1.Role.EMPRESA, client_1.Role.ADMIN),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CandidaturasController.prototype, "alterarStatus", null);
exports.CandidaturasController = CandidaturasController = __decorate([
    (0, common_1.Controller)("candidaturas"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [candidaturas_service_1.CandidaturasService])
], CandidaturasController);
//# sourceMappingURL=candidaturas.controller.js.map