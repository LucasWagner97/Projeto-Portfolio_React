import styles from './Sobre.module.css'

import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import js from './imagens/icon-js.svg'
import react from './imagens/icon-react.svg'
import node from './imagens/icon-node.svg'
import sql from './imagens/icon-sql.svg'
import avatar from './imagens/avatar.jpg'
import java from './imagens/icon-java.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
                
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Lucas Wagner</span> <br />
                    <strong>Dev Front-End</strong> </p>

                    <p>Estudante de Análise e Desenvolvimento de Sistemas e aprimorando meus conhecinhementos de Back e Front-End.</p>

                    <p>Sou inteiramente interessado em explorar e aprender sobre o mundo da programação e nutro uma paixão dedicada à democratização do conhecimento na área de tecnologia.</p>

                    <p>Atualmente aprendendo sobre a criação de aplicações dinâmicas, intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" /> 
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                    <img src={java} alt="Ícone do java" />
                </div>
            </div>

        </section>
    )
}
export default Sobre;