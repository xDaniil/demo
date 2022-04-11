import styled from "styled-components";
import { InstanceNewsModel } from "../../store/NewsStoreModel";
import { Typography } from "../Typography";

const Container = styled.div`
  max-width: 720px;
  flex-direction: column;
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
  align-items: top;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
`;

const NewsItemImage = styled.img`
  height: 300px;
  object-fit: cover;
`;

export const NewsItem = ({
  body,
  id,
  pictureUrl,
  title,
}: InstanceNewsModel) => {
  return (
    <Container>
      <TitleContainer>
        <Typography type="h2">{title}</Typography>
      </TitleContainer>

      <NewsItemImage src={pictureUrl} alt={title} />

      <Typography type="body">{body}</Typography>
    </Container>
  );
};
