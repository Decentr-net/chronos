import { MaintenanceGuard } from '@core/guards/maintenance.guard';

export * from './maintenance.guard';

export const CORE_GUARDS = [
  MaintenanceGuard,
];
