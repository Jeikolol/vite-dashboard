import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ListBullets as ListBulletsIcon } from '@phosphor-icons/react/dist/ssr/ListBullets';

import { ApiStatus } from '@/contexts/widget-data';

export function TasksProgress({ title, status, userUsed, userPending, sx }: Readonly<ApiStatus>): React.JSX.Element {
  const totalUsers = userUsed + userPending;
  const percentage = totalUsers > 0 ? (userUsed / totalUsers) * 100 : 0;
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" gutterBottom variant="overline">
                {title}
              </Typography>
              <Typography variant="h4">{status}</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-warning-main)', height: '56px', width: '56px' }}>
              <ListBulletsIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          <div>
            <LinearProgress
              sx={{
                height: '15px',
                borderRadius: '7px',
              }}
              value={percentage}
              variant="determinate"
            />
          </div>
          <div className="row">
            <div className="col-6">
              <LinearProgress
                sx={{
                  height: '15px',
                  borderRadius: '7px',
                }}
                value={userUsed}
                variant="determinate"
              />
            </div>
            <div className="col-6">
              <LinearProgress
                sx={{
                  height: '15px',
                  borderRadius: '7px',
                }}
                value={userPending}
                variant="query"
              />
            </div>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
