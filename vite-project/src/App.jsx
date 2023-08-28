

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css'


// author: { avatr_url: ", name: ", role: ""}
//publishedAt: date
// content: "String"

const post = [
  {
    id: 1,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/135069504?v=4",
      name: 'Roberto Moreira',
      role:'Desenvolvedor Front-end',
    },

    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋'},

     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

     { type: 'link', content: 'jane.design/doctorcare'},
       
    ],
    publishedAt: new Date('2023-08-17 17:12:30'),
  },


{
  id: 2,
  author:{
    avatarUrl:"https://github.com/diego3g.png",
    name: 'Diego Fernandes',
    role:'CTO @Rocketseat',
  },

  content: [
   { type: 'paragraph', content: 'Fala galeraa 👋'},

   { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

   { type: 'link', content: 'jane.design/doctorcare'},
     
  ],
  publishedAt: new Date('2023-08-22 17:12:30'),
},
];


export function App() {
  return (
    <>

      <Header/> 
       
       <div className={styles.wrapper}>

         <Sidebar/>
         
        
         <main>
          {post.map(post => {
              return (<Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}

              
              />
              )

          })}
        
      
         </main>
       </div>
     
   </>
  )
}


