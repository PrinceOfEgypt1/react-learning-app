// src/pages/FundamentosOverview.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { Grid, GridItem } from '../components/Grid';
import { fundamentos } from '../data/fundamentos';
import { SkeletonLoader } from '../components/SkeletonLoader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './FundamentosOverview.css';

export default function FundamentosOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 640px)');
  
  // Simular carga para mostrar skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Variantes para a animação estaggered
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <Container>
      <motion.div 
        className="fundamentos-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link to="/" className="button-back">
            ← Voltar à Página Inicial
          </Link>
        </motion.div>
        
        <motion.h1 
          className="fundamentos-title"
          variants={itemVariants}
        >
          Fundamentos da Programação
        </motion.h1>
        
        <motion.p 
          className="fundamentos-description"
          variants={itemVariants}
        >
          Selecione um tópico para começar sua jornada de aprendizado em programação. 
          Cada módulo contém exemplos, exercícios e recursos para aprofundar seu conhecimento.
        </motion.p>
        
        {isLoading ? (
          <Grid cols={isMobile ? 1 : "auto-fill"} gap="lg" minWidth="280px">
            <SkeletonLoader type="card" count={6} />
          </Grid>
        ) : (
          <motion.div variants={itemVariants}>
            <Grid 
              cols={isMobile ? 1 : "auto-fill"} 
              gap="lg" 
              minWidth="280px"
              className="fundamentos-topics-grid"
            >
              {fundamentos.map((topic, index) => (
                <GridItem key={topic.id}>
                  <Card 
                    title={topic.title}
                    to={`/fundamentos/${topic.id}`}
                    index={index}
                    isPopular={topic.id === 'logica' || topic.id === 'algoritmos'}
                  />
                </GridItem>
              ))}
            </Grid>
          </motion.div>
        )}
        
        <motion.div 
          className="fundamentos-footer"
          variants={itemVariants}
        >
          <h2>Por onde começar?</h2>
          <p>
            Se você é iniciante, recomendamos começar com <Link to="/fundamentos/logica">Lógica de Programação</Link>, 
            que é a base para todos os outros conceitos. Em seguida, prossiga com 
            <Link to="/fundamentos/algoritmos"> Algoritmos Básicos</Link> e <Link to="/fundamentos/variaveis">Tipos de Dados e Variáveis</Link>.
          </p>
        </motion.div>
        
        <motion.div 
          className="fundamentos-learning-path"
          variants={itemVariants}
        >
          <h2>Caminho de aprendizado sugerido</h2>
          <ol className="learning-path-list">
            <li>
              <Link to="/fundamentos/logica">Lógica de Programação</Link>
              <p>Compreenda os conceitos fundamentais de resolução de problemas.</p>
            </li>
            <li>
              <Link to="/fundamentos/algoritmos">Algoritmos Básicos</Link>
              <p>Aprenda os principais algoritmos e suas implementações.</p>
            </li>
            <li>
              <Link to="/fundamentos/variaveis">Tipos de Dados e Variáveis</Link>
              <p>Entenda como armazenar e manipular dados em programas.</p>
            </li>
            <li>
              <Link to="/fundamentos/condicionais">Estruturas Condicionais</Link>
              <p>Domine as estruturas de decisão para controle de fluxo.</p>
            </li>
            <li>
              <Link to="/fundamentos/lacos">Laços de Repetição</Link>
              <p>Aprenda a automatizar tarefas repetitivas com loops.</p>
            </li>
            <li>
              <Link to="/fundamentos/funcoes">Funções e Procedimentos</Link>
              <p>Organize seu código em blocos reutilizáveis e modulares.</p>
            </li>
          </ol>
        </motion.div>
      </motion.div>
    </Container>
  );
}
