import { useEffect, useState } from 'react'
import CARD from '../../components/CARD'
import styles from './Projetos.module.css'



function Projetos() {

  

       const [ repositories, setRepositories ] = useState([])
   
       
   
       useEffect(() => {
           const buscarRepositorios = async () => { 
               const response = await fetch('https://api.github.com/users/LucasWagner97/repos')  
               const data = await response.json() 
               setRepositories(data) 
           }
           buscarRepositorios()
       }, [])
   
       
       return (
           <section className={styles.projetos}>
               <h2>Projetos</h2>
               
               {
                   repositories.length > 0 ? (       
                       <section className={styles.lista}>
                           {  
                               repositories.map((repo) => ( 
                                
                                   <CARD
                                   
                                       key={repo.id} 
                                       name={repo.name}
                                       description={repo.description}
                                       html_url={repo.html_url}
                                
                                   />
                                
                               ))
                           }
                       </section>
                   ) : ( 
                       <p>Carregando repositórios...</p>
                   )
               }
           </section>
       )
   }
   
   export default Projetos