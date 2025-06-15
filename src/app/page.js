'use client'

import "./globals.css";
import Converter from "@/app/Converter/Converter";
import History from "@/app/History/History";
import { AppBar, Typography } from "@mui/material";

export default function Home() {
    return (
        <>
            <AppBar position="static">
                <Typography variant={"h4"} align={"center"}>Converter</Typography>
            </AppBar>
            <Converter />
            <History />
        </>
    );
}
