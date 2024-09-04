"use client";

import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@repo/ui";
import { Menu } from "@repo/ui/icons";

const SECTIONS = ['Home', 'Sobre']

export default function TemporaryDrawer({ children }: any) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        background: "#F5F5F5",
        height: "100%"
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {SECTIONS.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container disableGutters sx={{ paddingTop: "56px" }}>
      <Box sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        background: "#50B748",
        height: 56,
        display: "flex",
        alignContent: "center",
      }}>
        <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
          <Menu sx={{ color: "white" }} />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
      {children}
    </Container>
  );
}
