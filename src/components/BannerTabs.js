import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { createUseStyles } from 'react-jss';
import ExperienceSection from '../components/ExperienceSection';
import EducationTabSection from '../components/EducationTabSection';
import AboutSection from '../components/AboutSection';
import AnswersSection from '../components/AnswersSection';
import axios from 'axios'

const useStyles = createUseStyles({
    tabBar: style=>({
        backgroundColor: style.bgCol
    }),
    notActive: {
        cursor: 'pointer',
        '& span':{
            color: '#fff' 
        },
        '&:hover': {
            border: '0'
        }
    },
    active: style=>({
        backgroundColor: '#fff',
        '& span':{
            color: style.tabFontColor
        }
    }),
    aboutSectionContainer: {
        margin: {
            top: '2rem'
        },
        padding: '1.7rem 0',
        boxShadow: '0 0 5 px 1 px rgba(202, 202, 202, 0.75)',
        backgroundColor: '#ffffff',
        borderRadius: '0.3rem'
    },
    experienceSectionContr:{
      margin: {
        top: '2rem',
      },
      padding: '1.7rem 0',
        boxShadow: '0 0 5 px 1 px rgba(202, 202, 202, 0.75)',
        backgroundColor: '#ffffff',
        borderRadius: '0.3rem'
    },
    educationSectionContr:{
      margin: {
        top: '2rem',
      },
      padding: '1.7rem 0',
        boxShadow: '0 0 5 px 1 px rgba(202, 202, 202, 0.75)',
        backgroundColor: '#ffffff',
        borderRadius: '0.3rem'
    }
})

const BannerTabs = ({style,user}) => {
    const [activeTab, setActiveTab] = useState('1');
    const [about, setAbout] = useState('Nothing Found');
    const [answers, setanswers] = useState('Nothing Found');
    

    useEffect(() => {
        async function fetchExperties() {
            await axios.get(`http://www.mocky.io/v2/5e1b53f331000065004f332b`)
                .then(res => {
                    const data = res.data.about;
                    setAbout(data);
                }).catch((e) => console.log(e)).finally(() => {
                    
                })
        }
        fetchExperties();
    })

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    }

    const classes = useStyles(style);
  return (
    <div>
      <Nav tabs className={classes.tabBar}>
        <NavItem className={classes.navItem}>
          <NavLink
            className={activeTab === '1' ? classes.active : classes.notActive}  
            onClick={() => { toggle('1'); }}
                >
            <span>Profile</span>
          </NavLink>
        </NavItem>
        <NavItem className={classes.navItem}>
          <NavLink
            className={activeTab === '2' ? classes.active : classes.notActive}
            onClick={() => { toggle('2'); }}
          >
           <span>Answers</span>
          </NavLink>
        </NavItem>
        <NavItem className={classes.navItem}>
          <NavLink
            className={activeTab === '3' ? classes.active : classes.notActive}
            onClick={() => { toggle('3'); }}
            >
            <span>Reviews</span>
          </NavLink>
        </NavItem>
        <NavItem className={classes.navItem}>
          <NavLink
            className={activeTab === '4' ? classes.active : classes.notActive}
            onClick={() => { toggle('4'); }}
          >
            <span>Blogs</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className={classes.aboutSectionContainer}>
                  <AboutSection about={about} title="About" style={{fontCol: '#295caa',width:'90%'}}/>
              </div>
              <div className={classes.experienceSectionContr}>
                  <ExperienceSection style={{width: '90%'}} title="Experience"/>
              </div>
              <div className={classes.educationSectionContr}>
                  <EducationTabSection style={{width: '90%'}} title="Education" user={user}/>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <AnswersSection answers={answers} user={user}/>              
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Tab 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Tab 4 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        </TabContent>
    </div>
  );
}

export default BannerTabs;