// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroCard } from '../components/HeroCard';
import { Card } from '../components/Card';
import { SkeletonLoader } from '../components/SkeletonLoader';
import { Container } from '../components/Container';
import { Grid, GridItem } from '../components/Grid';
import { useTheme } from '../contexts/ThemeContext';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './Home.css';

interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  disabled: boolean;
  isPopular?: boolean;
}

export default function Home() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 640px)');
  
  // Cursos em desenvolvimento
  const upcomingCourses: CourseItem[] = [
    {
      id: 'python-basics',
      title: 'Python para Iniciantes',
      subtitle: 'Aprenda a sintaxe e os conceitos essenciais da linguagem Python.',
      disabled: true,
      isPopular: true
    },
    {
      id: 'java-basics',
      title: 'Java Fundamental',
      subtitle: 'Introdução à linguagem Java e fundamentos da programação orientada a objetos.',
      disabled: true
    },
    {
      id: 'web-dev',
      title: 'Fundamentos de Desenvolvimento Web',
      subtitle: 'HTML, CSS e JavaScript básico para criação de páginas web.',
      disabled: true,
      isPopular: true
    },
    {
      id: 'python-web',
      title: 'Python para Web (Back-end)',
      subtitle: 'Crie aplicações web com Python utilizando frameworks como Flask e Django.',
      disabled: true
    },
    {
      id: 'java-web',
      title: 'Java para Web (Back-end)',
      subtitle: 'Desenvolvimento de APIs e serviços web com Spring Boot.',
      disabled: true
    },
    {
      id: 'fullstack',
      title: 'Desenvolvimento Full-Stack',
      subtitle: 'Projetos completos combinando front-end, back-end e banco de dados.',
      disabled: true
    }
  ];
  
  // Simular carregamento para mostrar skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animações com framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="home-title" variants={itemVariants}>
          Aplicação de Aprendizagem
        </motion.h1>
        
        <motion.p className="home-subtitle" variants={itemVariants}>
          Sua jornada de aprendizado em lógica de programação, algoritmos, Java e Python.
          Conceitos, exemplos práticos e exercícios em um só lugar.
        </motion.p>

        {isLoading ? (
          <SkeletonLoader type="hero" />
        ) : (
          <motion.div variants={itemVariants}>
            <HeroCard />
          </motion.div>
        )}

        <motion.h2 className="home-section-title" variants={itemVariants}>
          Cursos em Desenvolvimento
        </motion.h2>
        
        <motion.p className="home-section-description" variants={itemVariants}>
          Estamos trabalhando em novos conteúdos para ampliar sua jornada de aprendizado. 
          Fique atento às atualizações!
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
              className="home-courses-grid"
            >
              {upcomingCourses.map((course, index) => (
                <GridItem key={course.id}>
                  <Card
                    title={course.title}
                    subtitle={course.subtitle}
                    disabled={course.disabled}
                    index={index}
                    isPopular={course.isPopular}
                  />
                </GridItem>
              ))}
            </Grid>
          </motion.div>
        )}
        
        <motion.div className="home-cta" variants={itemVariants}>
          <h2>Pronto para começar?</h2>
          <p>
            Comece sua jornada de aprendizado agora mesmo com nossos fundamentos de programação.
            São conceitos essenciais para qualquer pessoa que deseja se aventurar no mundo da programação.
          </p>
          <Link to="/fundamentos" className="cta-button">
            Iniciar Fundamentos de Programação
          </Link>
        </motion.div>
      </motion.div>
    </Container>
  );
}
