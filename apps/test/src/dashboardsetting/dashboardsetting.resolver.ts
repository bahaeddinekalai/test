import * as graphql from "@nestjs/graphql";
import { DashboardsettingResolverBase } from "./base/dashboardsetting.resolver.base";
import { Dashboardsetting } from "./base/Dashboardsetting";
import { DashboardsettingService } from "./dashboardsetting.service";

@graphql.Resolver(() => Dashboardsetting)
export class DashboardsettingResolver extends DashboardsettingResolverBase {
  constructor(protected readonly service: DashboardsettingService) {
    super(service);
  }
}
