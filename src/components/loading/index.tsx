import { Stack } from "@mui/material";

export default function Loading() {
    return (
        <Stack
            sx={{
                zIndex: 100,
                width: "100%",
                height: "100dvh",
                position: "fixed",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white"
            }}>
            <Stack className="loading " sx={{ color: "black" }} >
                <div className="loading__letter">L</div>
                <div className="loading__letter">o</div>
                <div className="loading__letter">a</div>
                <div className="loading__letter">d</div>
                <div className="loading__letter">i</div>
                <div className="loading__letter">n</div>
                <div className="loading__letter">g</div>
                <div className="loading__letter">.</div>
                <div className="loading__letter">.</div>
                <div className="loading__letter">.</div>
            </Stack>
        </Stack>
    )
}