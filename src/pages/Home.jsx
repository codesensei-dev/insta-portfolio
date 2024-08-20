import ProfileSection from "../components/ProfileSection";
import ContentSection from "../components/ContenSection";
import GroupCardComponent from "../components/GroupCardComponent";
import LinkCardComponent from "../components/LinkCardComponent";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import User from "../models/User";
import FooterSection from "../components/FooterSection";
import Loading from "./Loading";

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
    <>
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
                "name": "Who is Code-Sensei?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Code-Sensei, aka Gowtham Paruchuru, is a Senior Software Engineer with over 4 years of experience. He has conducted interviews with more than 100 candidates and specializes in Java, Python, and Data Structures and Algorithms."
                }
              },
              {
                "@type": "Question",
                "name": "What type of content does Code-Sensei create?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Code-Sensei creates Instagram reels focused on System Design, Java tutorials, and Interview Tips. Additionally, he is planning to launch a YouTube channel soon, offering even more in-depth content."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I follow Code-Sensei?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Follow Code-Sensei on Instagram at @codesensei.dev, where he has a growing community of over 30,000+ followers."
                }
              }
            ]
          }
          `}
        </script>
      </div>
    </>
  ) : (<Loading />);
}

function GetGroupCards(groups, navigator, user) {
  let rows = [];
  for (var i = 0; i < groups.length; i += 2) {
    rows.push(i + 1 < groups.length ? [groups[i], groups[i + 1]] : [groups[i], null])
  }
  return (
    <>
      {rows.map((row, index) => {
        return (
          <Row style={{ textAlign: 'center' }}>
            <Col lg={2} md={2} sm={2} xs={0}></Col>
            <Col
              lg={3}
              md={3}
              sm={3}
              xs={5}
              style={{ textAlign: 'center', margin: '10px auto', padding: 0 }}
            >
              <GroupCardComponent
                key={`${index}1`}
                group={row[0]}
                onClick={() => navigator(row[0].id)}
              />
            </Col>
            <Col
              lg={3}
              md={3}
              sm={3}
              xs={5}
              style={{ textAlign: 'center', margin: '10px auto', padding: 0 }}
            >
              {row[1] != null ? (
                <GroupCardComponent
                  key={`${index}2`}
                  group={row[1]}
                  onClick={() => navigator(row[1].id)}
                />
              ) : null}
            </Col>
            <Col lg={2} md={2} sm={2} xs={0}></Col>
          </Row>
        );
      })}
      <FooterSection user={user} />
    </>
  );
}

function GetLinksGroup(title, links) {
  return (
    <>
      <h5>{title}</h5>
      {links.map((link, index) => {
        return <LinkCardComponent key={index} link={link} />;
      })}
    </>
  );
}