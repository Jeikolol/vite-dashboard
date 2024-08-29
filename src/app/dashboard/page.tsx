import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { API_STATUS_DATA } from '@/contexts/widget-data';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid lg={2} sm={6} xs={12}>
        <TotalProfit title="Plan Consultas JCE" sx={{ height: '100%' }} value="500" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <Budget title="Consultas Realizadas" diff={2.65} sx={{ height: '100%' }} value="13" />
      </Grid>
      <Grid lg={2} sm={6} xs={12}>
        <Budget title="Consultas Disponibles" diff={97.4} sx={{ height: '100%' }} value="487" />
      </Grid>
      <Grid lg={6} sm={6} xs={12}>
        <TasksProgress {...API_STATUS_DATA} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={12} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'ORD-007',
              customer: { name: 'Ekaterina Tankova' },
              amount: 30.5,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-006',
              customer: { name: 'Cao Yu' },
              amount: 25.1,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-004',
              customer: { name: 'Alexa Richardson' },
              amount: 10.99,
              status: 'refunded',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-003',
              customer: { name: 'Anje Keizer' },
              amount: 96.43,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-002',
              customer: { name: 'Clarke Gillebert' },
              amount: 32.54,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-001',
              customer: { name: 'Adam Denisov' },
              amount: 16.76,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
