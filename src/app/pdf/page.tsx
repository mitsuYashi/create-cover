import { RenderPDF } from "@/components/RenderPDF";
import { Suspense } from "react";

export default function Home() {
    return (
        <Suspense fallback={<div style={{height: "100vh", width: "100vw", backgroundColor: "white"}}>Loading...</div>}>
            <RenderPDF />
        </Suspense>
    );
}