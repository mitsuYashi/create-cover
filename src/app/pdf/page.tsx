import { RenderPDF } from "@/components/RenderPDF";
import { Suspense } from "react";

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RenderPDF />
        </Suspense>
    );
}