import { Dashboardsetting as TDashboardsetting } from "../api/dashboardsetting/Dashboardsetting";

export const DASHBOARDSETTING_TITLE_FIELD = "id";

export const DashboardsettingTitle = (record: TDashboardsetting): string => {
  return record.id?.toString() || String(record.id);
};
