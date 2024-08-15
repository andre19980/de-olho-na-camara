import { ElementType } from 'react';
import {
  Stack,
  Typography,
  Avatar,
  Box,
  Card,
  CardContent,
  Button,
} from '@mui/material';

import classes from "./table.module.css";

interface DataTableProps {
  data: any;
  page: number;
  items: number;
  linkComponent?: ElementType;
}

export default function DataTable({
  data,
  page,
  items,
  linkComponent,
}: DataTableProps) {
  const start = (page - 1) * items;
  const end = page * items;

  const cards =  end > data.length ? data.slice(start) : data.slice(start, end);

  return (
    <Box>
      {cards.map((card: any) =>
        <Card className={classes.card} key={card.id}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                <Avatar>AA</Avatar>
                <Stack overflow="hidden">
                  <Typography
                    style={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {card.nome}
                  </Typography>
                  <Typography
                    fontSize={14}
                    style={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {card.partido.sigla} | {card.siglaUf}
                  </Typography>
                </Stack>
              </Stack>

              {linkComponent
                ? <Button
                    variant="outlined"
                    component={linkComponent}
                    to={{
                      pathname: `deputados/${card.id}`,
                    }}
                  >ver</Button>
                : <Button variant="outlined">ver</Button>}
            </Stack>
          </CardContent>
        </Card>
      )}
   </Box>
  );
}
