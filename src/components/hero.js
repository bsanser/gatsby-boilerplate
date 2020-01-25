import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #0f2027 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  margin-top: 0;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    /* text-shadow: 1px 1px 3px #eeddff66; */
    font-size: 2.25rem;
    color: white;
  }

  p,
  a {
    margin-top: 0;
    color: white;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  //query for the image
  const { image } = useStaticQuery(graphql`
    query {
      # image, below, is the alias we have decided to use to rename the node
      image: file(relativePath: { eq: "london-hero.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Barbs thoughts from London with &hearts;</h1>
        <p>
          Hello London <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
