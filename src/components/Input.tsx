"use client";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const Input = () => {
    const companyNameRef = useRef<HTMLInputElement>(null);
    const applicationNameRef = useRef<HTMLInputElement>(null);
    const documentNameRef = useRef<HTMLInputElement>(null);
    const versionRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const projectNameRef = useRef<HTMLInputElement>(null);
    const [pdf, setPdf] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setPdf(true);
        // URLパラメータに値をセット
        const params = new URLSearchParams();
        companyNameRef.current?.value && params.set("companyName", companyNameRef.current!.value);
        applicationNameRef.current?.value && params.set("applicationName", applicationNameRef.current!.value);
        documentNameRef.current?.value && params.set("documentName", documentNameRef.current!.value);
        versionRef.current?.value && params.set("version", versionRef.current!.value);
        dateRef.current?.value && params.set("date", dateRef.current!.value);
        projectNameRef.current?.value && params.set("projectName", projectNameRef.current!.value);
        router.push(`/pdf?${params.toString()}`);
    }

    return (
        <FormControl
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{
                margin: "0 auto",
                width: "100%",
                backgroundColor: "white",
                height: "100vh",
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <TextField variant="outlined" label="会社名" inputRef={companyNameRef} />
                <TextField variant="outlined" label="アプリ名" inputRef={applicationNameRef} />
                <TextField variant="outlined" label="ドキュメント名" inputRef={documentNameRef} />
                <TextField variant="outlined" label="バージョン" inputRef={versionRef} />
                <TextField variant="outlined" label="日付" inputRef={dateRef} />
                <TextField variant="outlined" label="プロジェクト名(チーム名)" inputRef={projectNameRef} />
                <Button variant="contained" onClick={handleClick}>PDFを生成</Button>
            </Box>
        </FormControl>
        
    );
}