import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean {
        // get the roles required
        const roles = this.reflector.getAllAndOverride<string[]>('roles', [context.getHandler(), context.getClass()]);
        if (!roles) {
            return false;
        }

        const request = context.switchToHttp().getRequest();
        console.log(request.user);

        const userRoles = request.user.typeId;
        return roles.includes(userRoles);
    }
}