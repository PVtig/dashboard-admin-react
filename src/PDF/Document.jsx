import axios from "axios";
import { React,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "AntonFamily",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "AntonFamily",

  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    fontFamily: "AntonFamily",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily: "AntonFamily",
  },
});

const ReportPage = () => {
    const {id} = useParams();
//     const src = 'http://localhost/report/' + id
//     const [post, setPost] = useState([]);
//   useEffect(()=>{
//   axiosMyCustomFont
//     .get(src)
//     .then(res => res.json())
//     .then(data => setPost(data)) 
//   },[]);


  const src = 'http://localhost/report/' + id
  const [articles, setArticles] = useState([]);
    useEffect(()=>{
    axios
      .get(src)
      .then(resalt => {
        setArticles(resalt.data);
      })  
  },[]);
// console.log(articles.number)
  return (
    <Document>
      {articles.map((page, index) => {
        return (
          <Page key={index} >
          <Text style={styles.header} fixed></Text>
          <Image style={styles.image} src={page.image} />
          <Text style={styles.text}>
          {page.text}
          </Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
        )
      })}

    </Document>
  );
};

export default ReportPage;
