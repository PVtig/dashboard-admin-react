import axios from "axios";
import { React,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4'
  },
  header: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
    color: "grey"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
}); 

const DocumentPage = () => {
  const {id} = useParams();
  const src = 'http://localhost/report/' + id
  const [articles, setArticles] = useState([]);
    useEffect(()=>{
    axios
      .get(src)
      .then(resalt => {
        setArticles(resalt.data);
      })  
  },[]);
  return (
    <PDFViewer 
    width='1000px' 
    height='1000px'>
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Text>Report - {articles.number}</Text>
        </View>

        <View style={styles.section}>
          <Text>Number id - {articles.id}</Text>
          <Text>Type - {articles.type}</Text>
          <Text>Mileage - {articles.mileage}</Text>
        </View>

        <View style={styles.section}>
          <Text>Car - {articles.car_id}</Text>
          <Text>Model - </Text>
          <Text>Weight - </Text>
          <Text>Lifting - </Text>
        </View>

        <View style={styles.section}>
          <Text>User id- {articles.user_id}</Text>
          <Text>User name- {articles.user_id}</Text>
          <Text>User surname- {articles.user_id}</Text>
        </View>

        <View style={styles.section}>
          <Text>Manager _______________</Text>
          <Text>Worcker _______________</Text>
        </View>

      </Page>
    </Document>
    </PDFViewer>
    
  );
};

export default DocumentPage;
