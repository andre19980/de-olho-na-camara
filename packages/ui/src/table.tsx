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

export default function DataTable({ data }: { data: any }) {
  const cards = data.slice(0, 5);

  return (
    <Box>
      {cards.map((card: any) =>
        <Card className={classes.card}>
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

              <Button variant="outlined">ver</Button>
            </Stack>
          </CardContent>
        </Card>
      )}
   </Box>
  );
}
