// src/pages/TopicPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fundamentos } from '../data/fundamentos';
import { Button } from '../components/Button';
import { SkeletonLoader } from '../components/SkeletonLoader';
import { Container } from '../components/Container';
import { Grid, GridItem } from '../components/Grid';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './TopicPage.css';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState(fundamentos.find(t => t.id === topicId));
  const [activeTab, setActiveTab] = useState<'examples' | 'exercises' | 'resources'>('examples');
  const isMobile = useMediaQuery('(max-width: 640px)');

  // Simular carregamento para melhorar a percepção de performance
  useEffect(() => {
    setIsLoading(true);
    
    // Simular um tempo de carregamento realista
    const timer = setTimeout(() => {
      setTopic(fundamentos.find(t => t.id === topicId));
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [topicId]);

  if (isLoading) {
    return (
      <Container narrow>
        <Link to="/fundamentos" className="button-back">← Voltar a Fundamentos</Link>
        <SkeletonLoader type="page" />
      </Container>
    );
  }

  if (!topic) {
    return (
      <Container narrow>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link to="/fundamentos" className="button-back">← Voltar a Fundamentos</Link>
          <div className="topic-not-found">
            <h1>Tópico não encontrado</h1>
            <p>O tópico que você está procurando não existe ou foi removido.</p>
            <Button
              variant="primary"
              onClick={() => window.history.back()}
            >
              Voltar à página anterior
            </Button>
          </div>
        </motion.div>
      </Container>
    );
  }

  // Animação para o contêiner principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    },
    exit: { opacity: 0 }
  };

  // Animação para elementos filhos
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Determinar a linguagem para coloração de código
  const getCodeLanguage = (code: string): string => {
    if (code.startsWith('// Java')) return 'java';
    if (code.startsWith('# Python')) return 'python';
    if (code.includes('algoritmo')) return 'portugol';
    return 'code';
  };

  return (
    <Container narrow>
      <motion.div 
        className="topic-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={childVariants}>
          <Link to="/fundamentos" className="button-back">
            ← Voltar a Fundamentos
          </Link>
        </motion.div>
        
        <motion.h1 
          className="topic-title"
          variants={childVariants}
        >
          {topic.title}
        </motion.h1>
        
        <motion.div 
          className="topic-content"
          variants={childVariants}
        >
          <p>{topic.content}</p>
        </motion.div>
        
        <motion.div 
          className="topic-tabs"
          variants={childVariants}
        >
          <button 
            className={`tab-button ${activeTab === 'examples' ? 'active' : ''}`}
            onClick={() => setActiveTab('examples')}
            aria-selected={activeTab === 'examples'}
            role="tab"
            id="tab-examples"
            aria-controls="panel-examples"
          >
            Exemplos
          </button>
          <button 
            className={`tab-button ${activeTab === 'exercises' ? 'active' : ''}`}
            onClick={() => setActiveTab('exercises')}
            aria-selected={activeTab === 'exercises'}
            role="tab"
            id="tab-exercises"
            aria-controls="panel-exercises"
          >
            Exercícios
          </button>
          <button 
            className={`tab-button ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
            aria-selected={activeTab === 'resources'}
            role="tab"
            id="tab-resources"
            aria-controls="panel-resources"
          >
            Recursos
          </button>
        </motion.div>
        
        <motion.div 
          className="topic-tab-content"
          variants={childVariants}
        >
          <AnimatePresence mode="wait">
            {activeTab === 'examples' && (
              <motion.div
                key="examples"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="tab-panel"
                role="tabpanel"
                id="panel-examples"
                aria-labelledby="tab-examples"
              >
                <Grid cols={isMobile ? 1 : 1} gap="md">
                  {topic.examples.map((example, index) => (
                    <GridItem key={index}>
                      <motion.div 
                        className="example-item"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <pre 
                          className={`code-block language-${getCodeLanguage(example.code)}`}
                          data-language={getCodeLanguage(example.code)}
                        >
                          <code>{example.code}</code>
                        </pre>
                        <p className="example-description">{example.description}</p>
                      </motion.div>
                    </GridItem>
                  ))}
                </Grid>
              </motion.div>
            )}
            
            {activeTab === 'exercises' && (
              <motion.div
                key="exercises"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="tab-panel"
                role="tabpanel"
                id="panel-exercises"
                aria-labelledby="tab-exercises"
              >
                <ul className="exercise-list">
                  {topic.exercises.map((exercise, index) => (
                    <motion.li 
                      key={index}
                      className="exercise-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {exercise}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
            
            {activeTab === 'resources' && (
              <motion.div
                key="resources"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="tab-panel"
                role="tabpanel"
                id="panel-resources"
                aria-labelledby="tab-resources"
              >
                <ul className="resource-list">
                  {topic.resources.map((resource, index) => (
                    <motion.li 
                      key={index}
                      className="resource-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        {resource.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="topic-navigation"
          variants={childVariants}
        >
          <Grid 
            cols={isMobile ? 1 : 2} 
            gap="md"
          >
            <GridItem>
              <Button 
                variant="outline"
                onClick={() => window.history.back()}
                className="button-back-nav"
              >
                Voltar
              </Button>
            </GridItem>
            <GridItem>
              <Button 
                variant="primary"
                onClick={() => window.location.href = topic.resources[0]?.url || '#'}
                disabled={!topic.resources.length}
                className="button-learn-more"
              >
                Aprender mais
              </Button>
            </GridItem>
          </Grid>
        </motion.div>
        
        {/* Navegação de tópicos anterior/próximo */}
        <motion.div 
          className="topic-pagination"
          variants={childVariants}
        >
          <div className="topic-pagination-title">
            <h3>Navegação de Tópicos</h3>
          </div>
          
          <Grid cols={isMobile ? 1 : 2} gap="md">
            {getPreviousTopic(topic.id) && (
              <GridItem>
                <Link 
                  to={`/fundamentos/${getPreviousTopic(topic.id)?.id}`}
                  className="topic-pagination-link prev-topic"
                >
                  <span className="pagination-direction">← Anterior</span>
                  <span className="pagination-title">{getPreviousTopic(topic.id)?.title}</span>
                </Link>
              </GridItem>
            )}
            
            {getNextTopic(topic.id) && (
              <GridItem>
                <Link 
                  to={`/fundamentos/${getNextTopic(topic.id)?.id}`}
                  className="topic-pagination-link next-topic"
                >
                  <span className="pagination-direction">Próximo →</span>
                  <span className="pagination-title">{getNextTopic(topic.id)?.title}</span>
                </Link>
              </GridItem>
            )}
          </Grid>
        </motion.div>
      </motion.div>
    </Container>
  );
}

// Funções para navegação entre tópicos
function getPreviousTopic(currentId: string) {
  const currentIndex = fundamentos.findIndex(t => t.id === currentId);
  return currentIndex > 0 ? fundamentos[currentIndex - 1] : null;
}

function getNextTopic(currentId: string) {
  const currentIndex = fundamentos.findIndex(t => t.id === currentId);
  return currentIndex < fundamentos.length - 1 ? fundamentos[currentIndex + 1] : null;
}
