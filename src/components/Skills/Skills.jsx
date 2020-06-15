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
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
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
                      <div className="skills-wrapper__text">
                        <div data-tilt className="thumbnail rounded">
                          <h3 className="skills-wrapper__text-title">{title || ''}</h3>
                          <SkillsImg alt={title} filename={img} />
                          <p>
                            {info ||
                              ''}
                          </p>
                          {/* This will be a buffer of sorts. */}
                          <div className="skills-wrapper__text-title"></div>
                        </div>
                      </div>
                    </Tilt>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
