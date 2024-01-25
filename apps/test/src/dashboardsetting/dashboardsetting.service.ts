import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardsettingServiceBase } from "./base/dashboardsetting.service.base";

@Injectable()
export class DashboardsettingService extends DashboardsettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
