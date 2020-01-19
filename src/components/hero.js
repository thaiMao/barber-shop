import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hair_hero" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const imageData = data.file.childCloudinaryAsset.fluid;

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <h2 style={{ height: "50vh" }}>Gatsby image background</h2>
    </BackgroundImage>
  );
};

const StyledHero = styled(Hero)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 50vh;
`;

export default StyledHero;
