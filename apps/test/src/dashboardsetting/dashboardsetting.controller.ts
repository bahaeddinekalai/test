import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DashboardsettingService } from "./dashboardsetting.service";
import { DashboardsettingControllerBase } from "./base/dashboardsetting.controller.base";

@swagger.ApiTags("dashboardsettings")
@common.Controller("dashboardsettings")
export class DashboardsettingController extends DashboardsettingControllerBase {
  constructor(protected readonly service: DashboardsettingService) {
    super(service);
  }
}
