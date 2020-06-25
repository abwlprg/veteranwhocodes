import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import SkillsImg from '../Image/SkillsImg';
import Tilt from 'react-tilt';


const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { id, title, info, img } = skills;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          {skills.map(skills => {
            const { id, title, info, img } = skills;
            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="skills-wrapper__image">
                      <a
                        href=''
                        target="_blank"
                        aria-label=""
                        rel=""
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <SkillsImg alt={title} filename={img} />
                          </div>
                          <br/>
                          <br/>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
                <hr/>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="skills-wrapper__text">
                      <h1 className="skills-wrapper__text-title"><u>{title || ''}</u></h1>
                      <div>
                        <h2>
                          {info ||
                            ''}
                        </h2>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
      <hr></hr>
    </section>
  );
};

export default Skills;