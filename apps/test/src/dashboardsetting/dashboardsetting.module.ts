import { Module } from "@nestjs/common";
import { DashboardsettingModuleBase } from "./base/dashboardsetting.module.base";
import { DashboardsettingService } from "./dashboardsetting.service";
import { DashboardsettingController } from "./dashboardsetting.controller";
import { DashboardsettingResolver } from "./dashboardsetting.resolver";

@Module({
  imports: [DashboardsettingModuleBase],
  controllers: [DashboardsettingController],
  providers: [DashboardsettingService, DashboardsettingResolver],
  exports: [DashboardsettingService],
})
export class DashboardsettingModule {}
