import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import SkillsImg from '../Image/SkillsImg';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper ">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="technology image" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__info">
                <p className="skills-wrapper__info-text">
                  {paragraphOne ||
                    ''}
                </p>
                <p className="skills-wrapper __info-text">
                  {paragraphTwo ||
                    ''}
                </p>
                <p className="skills-wrapper__info-text">
                  {paragraphThree || ''}
                </p>
                <p className="skills-wrapper__info-text">
                  {paragraphFour|| ''}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
