
"use client";

import dynamic from "next/dynamic";
import { PDF } from "./PDF";
import { useRouter, useSearchParams } from "next/navigation";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);

type Props = {
    companyName?: string,
    applicationName?: string,
    documentName?: string,
    version?: string,
    date?: string,
    projectName?: string,
};

export const RenderPDF = (props: Props) => {
    // const { companyName, applicationName, documentName, version, date, projectName} = props;

    // URLパラメータから値を取得
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const dateStr = `${year}.${month}.${day}`;

    const searchParams = useSearchParams();
    const companyName = searchParams.get("companyName") ?? undefined;
    const applicationName = searchParams.get("applicationName") ?? undefined;
    const documentName = searchParams.get("documentName") ?? undefined;
    const version = searchParams.get("version") ?? undefined;
    const date = searchParams.get("date") ?? dateStr;
    const projectName = searchParams.get("projectName") ?? undefined;

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <PDFViewer width="100%" height="100%">
        <PDF
            companyName={companyName}
            applicationName={applicationName}
            documentName={documentName}
            version={version}
            date={date}
            projectName={projectName}    
        />
      </PDFViewer>
    </div>
  );
}