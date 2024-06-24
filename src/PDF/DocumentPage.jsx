// import axios from "axios";
// import { React, useEffect, useState } from "react";
// import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// import { useParams } from "react-router-dom";
// import { Page, Text, View, Document, StyleSheet  } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//     page: {
//       backgroundColor: '#E4E4E4'
//     },
//     header: {
//       fontSize: 22,
//       marginBottom: 20,
//       textAlign: "center",
//       color: "grey"
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1
//     }
//   }); 

// const MyDocument = () => {
//   const {id} = useParams();
//   console.log(id)

//   const src = 'http://localhost/report/' + id
//   const [articles, setArticles] = useState([]);
//     useEffect(()=>{
//     axios
//       .get(src)
//       .then(resalt => {
//         setArticles(resalt.data);
//       })  
//   },[]);
//   console.log(articles.number)
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>

//         <View style={styles.header}>
//           <Text>Report 4{articles.id}</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>Number - {articles.number}</Text>
//           <Text>Type - {articles.type}</Text>
//           <Text>Mileage - {articles.mileage}</Text>
//           <Text>Car - {articles.car_id}</Text>
//           <Text>User - {articles.user_id}</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>Number{src}</Text>
//         </View>
//         <View style={styles.section}>
//         </View>
//         <View style={styles.section}>
//         </View>
//         <View style={styles.section}>
//         </View>
//       </Page>
//     </Document>
//   );
// };
// const DocumentPage = () => (
//     <div>
//         <PDFViewer 
//             width='1000px' 
//             height='1000px'>
//             <MyDocument />
//         </PDFViewer>

//         <PDFDownloadLink document={<MyDocument />} filename="FORM">
//             {({loading}) => (
//                 loading 
//                 ? <button>Loading Document...</button> 
//                 : <button>Download</button> )}
//         </PDFDownloadLink>
//     </div>
    
//   );
// export default DocumentPage;
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

const DocumentPage = () => {
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
    <div>{articles.id}</div>
  );
};

export default DocumentPage;
