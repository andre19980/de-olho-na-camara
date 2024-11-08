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

interface DataTableProps {
  data: {
    title: string;
    id: string;
    subtitle: string;
  }[];
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

  const getNameInitials = (name: string) => {
    const initials = name.match(/[A-Z]/g);
    return initials?.slice(0, 2).join("");
  }

  return (
    <Box>
      {cards.map((card) =>
        <Card sx={{ borderRadius: 0 }} key={card.id}>
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
                <Avatar>{getNameInitials(card.title)}</Avatar>
                <Stack overflow="hidden">
                  <Typography
                    style={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    fontSize={14}
                    style={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {card.subtitle}
                  </Typography>
                </Stack>
              </Stack>

              {linkComponent
                ? <Button
                    variant="outlined"
                    component={linkComponent}
                    to={{
                      pathname: `deputados/${encodeURIComponent(card.id)}`,
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
