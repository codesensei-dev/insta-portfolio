import ProfileSection from "../components/ProfileSection";
import ContentSection from "../components/ContenSection";
import GroupCardComponent from "../components/GroupCardComponent";
import LinkCardComponent from "../components/LinkCardComponent";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import User from "../models/User";
import FooterSection from "../components/FooterSection";
import Loading from "./Loading";
import Button from 'react-bootstrap/Button';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const linkVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

export default function Home() {
  const { groupid } = useParams();
  const navigate = useNavigate();
  const [userObj, setUserObj] = useState();

  function GroupCardOnClick(id) {
    navigate(`/links/${id}`);
  }

  useEffect(() => {
    async function loadData() {
      await fetch(`${process.env.PUBLIC_URL}/users/codesensei.dev.json`)
        .then((response) => response.json())
        .then((jsonData) => setUserObj(new User(jsonData)))
        .catch((error) => console.error('Error loading JSON:', error));
    }
    loadData();
  }, []);

  return userObj ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <ProfileSection user={userObj} />
      <ContentSection
        DisplayComponent={() => {
          if (typeof groupid === 'undefined') {
            return GetGroupCards(userObj.groups, GroupCardOnClick, userObj);
          } else {
            for (var i = 0; i < userObj.groups.length; i++) {
              if (userObj.groups[i].id == groupid) {
                return GetLinksGroup(
                  userObj.groups[i].mainText,
                  userObj.groups[i].links
                );
              }
            }
          }

          navigate('/notfound');
        }}
      />
      {/* Hidden FAQ Section for SEO */}
      <div style={{ display: 'none' }}>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Code Sensei?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CodeSensei, aka Gowtham Paruchuru, is a Senior Software Engineer working in salesforce company with over 5+ years of experience. He has conducted interviews with more than 150+ candidates and specializes in Java, Python, and Data Structures and Algorithms."
                }
              },
              {
                "@type": "Question",
                "name": "What type of content does Code Sensei create?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CodeSensei aka Gowtham Paruchuru creates Instagram reels focused on System Design, Java tutorials, and Interview Tips. Additionally, he is planning to launch a YouTube channel soon, offering even more in-depth content. And Code Sensei creates content in regional telugu lanuage specific to states of andhra pradesh and telangana."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I follow Code Sensei?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Follow CodeSensei aka Gowtham Paruchuru on Instagram at @codesensei.dev, where he has a growing community of over 120,000+ followers."
                }
              },
              {
                "@type": "Question",
                "name": "Who should follow CodeSensei?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You should follow CodeSensei aka Gowtham Paruchuru if you are a college student or a experienced engineer and trying to level up your coding skills by following tips and tricks provided by Code Sensei. You should follow him especially if you are from telugu community and people of andhra pradesh and telangana."
                }
              }
            ]
          }
          `}
        </script>
      </div>
    </motion.div>
  ) : (<Loading />);
}

function GetGroupCards(groups, navigator, user) {
  let rows = [];
  for (var i = 0; i < groups.length; i += 2) {
    rows.push(i + 1 < groups.length ? [groups[i], groups[i + 1]] : [groups[i], null])
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {rows.map((row, index) => {
        return (
          <Row key={index} style={{ textAlign: 'center' }}>
            <Col lg={2} md={2} sm={2} xs={0}></Col>
            <Col
              lg={3}
              md={3}
              sm={3}
              xs={5}
              style={{ textAlign: 'center', margin: '10px auto', padding: 0 }}
            >
              <motion.div variants={cardVariants}>
                <GroupCardComponent
                  key={`${index}1`}
                  group={row[0]}
                  onClick={() => navigator(row[0].id)}
                />
              </motion.div>
            </Col>
            <Col
              lg={3}
              md={3}
              sm={3}
              xs={5}
              style={{ textAlign: 'center', margin: '10px auto', padding: 0 }}
            >
              {row[1] != null ? (
                <motion.div variants={cardVariants}>
                  <GroupCardComponent
                    key={`${index}2`}
                    group={row[1]}
                    onClick={() => navigator(row[1].id)}
                  />
                </motion.div>
              ) : null}
            </Col>
            <Col lg={2} md={2} sm={2} xs={0}></Col>
          </Row>
        );
      })}
      <FooterSection user={user} />
    </motion.div>
  );
}

function GetLinksGroup(title, links) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={linkContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h5
        className="section-title"
        variants={linkVariants}
      >
        {title}
      </motion.h5>

      {links.map((link, index) => {
        return (
          <motion.div key={index} variants={linkVariants}>
            <LinkCardComponent link={link} />
          </motion.div>
        );
      })}

      <motion.div
        style={{ textAlign: 'center', margin: '20px auto', maxWidth: '600px' }}
        variants={linkVariants}
      >
        <Button
          className="back-button mt-4 w-100"
          onClick={() => navigate('/links')}
        >
          &larr; Back
        </Button>
      </motion.div>
    </motion.div>
  );
}
