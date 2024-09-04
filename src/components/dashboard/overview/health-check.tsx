'use client';

import * as React from 'react';
import { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { type ApiStatus } from '@/contexts/widget-data';

export function HealthCheck({ title, status, userUsed, userPending, sx }: Readonly<ApiStatus>): React.JSX.Element {
  const totalUsers = userUsed + userPending;
  const percentage = totalUsers > 0 ? (userUsed / totalUsers) * 100 : 0;
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack>
          <Typography color="text.secondary" gutterBottom variant="overline">
            {title}
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={3}>
            <Stack spacing={2} direction="column" flex={8}>
              <Typography variant="h4">{status}</Typography>
              <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                  <Stack direction="column" alignSelf="flex-end">
                    <Typography color="text.secondary" variant="h4">
                      13
                    </Typography>
                  </Stack>
                  <Stack direction="column" alignSelf="flex-end">
                    <Typography color="var(--mui-palette-success-main)" variant="h6">
                      1.2% en uso
                    </Typography>
                  </Stack>
                </Stack>

                <Stack direction="column" sx={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary" gutterBottom variant="h4">
                    500
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Disponible
                  </Typography>
                </Stack>
              </Stack>

              <LinearProgress
                sx={{
                  height: '15px',
                  borderRadius: '7px',
                }}
                value={percentage}
                variant="determinate"
              />
            </Stack>
            <Stack spacing={2} sx={{ alignItems: 'flex-end' }} flex={4}>
              {/* Selectores de prueba */}
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" startIcon={<MagnifyingGlass />}>
                Buscar
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
