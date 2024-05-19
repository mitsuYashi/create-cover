import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

type Props = {
  companyName?: string,
  applicationName?: string,
  documentName?: string,
  version?: string,
  date?: string,
  projectName?: string,
};

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "NotoSansJP",
    textAlign: "center",
    fontSize: 12,
  },
  companyName: {
    height: "20%",
    textAlign: "left",
  },
  applicationName: {
    fontSize: 18,
  },
  documentName: {
    height: "60%",
    fontSize: 30,
  },
  version: {
  },
  date: {
  },
  projectName: {
  },
});

Font.register({
  family: "NotoSansJP",
  fonts: [
    {
      src: "../fonts/NotoSansJP-Regular.ttf",
    },
    {
      src: "../fonts/NotoSansJP-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

export const PDF = (props: Props) => {
  const { companyName = "渋谷トラベル会社 様", applicationName = "宿予約システム「宿ナビ」", documentName = "機能要件書", version = "ver1.3", date = "2024.05.17", projectName = "うぇぶうぇーぶプロジェクト" } = props;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.companyName}>
          <Text>{companyName}</Text>
        </View>
        <View>
          <Text style={styles.applicationName}>{applicationName}</Text>
        </View>
        <View>
          <Text style={styles.documentName}>{documentName}</Text>
        </View>
        <View>
          <Text style={styles.version}>{version}</Text>
        </View>
        <View>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View>
          <Text style={styles.projectName}>{projectName}</Text>
        </View>
      </Page>
    </Document>
  );
}