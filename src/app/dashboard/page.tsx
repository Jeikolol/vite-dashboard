import * as React from 'react';
import type { Metadata } from 'next';
import { Grid, Stack } from '@mui/material';

import { config } from '@/config';
import { API_STATUS_DATA, CUSTOMER_TABLE_DATA } from '@/contexts/widget-data';
import { CustomerTable } from '@/components/dashboard/overview/customer-table';
import { DashboardCard } from '@/components/dashboard/overview/dashboard-card';
import { HealthCheck } from '@/components/dashboard/overview/health-check';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap sx={{ flexWrap: 'wrap' }}>
        <Grid>
          <DashboardCard title="Plan Consultas JCE" sx={{ height: '100%' }} value="500" />
        </Grid>
        <DashboardCard title="Consultas Realizadas" diff={2.65} sx={{ height: '100%' }} value="13" />
        <DashboardCard title="Consultas Disponibles" diff={97.4} sx={{ height: '100%' }} value="487" />
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2 }}>
        <HealthCheck {...API_STATUS_DATA} sx={{ height: '100%', lg: 6 }} />
      </Stack>
      <Grid lg={12} md={12} xs={12}>
        <CustomerTable orders={CUSTOMER_TABLE_DATA} sx={{ height: '100%' }} />
      </Grid>
    </Stack>
  );
}
