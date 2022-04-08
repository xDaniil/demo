import { i18n } from "@lingui/core";
import styled from "styled-components";
import { InstanceNewsModel } from "../../store/NewsStoreModel";
import { Typography } from "../Typography";
import { t } from "@lingui/macro";
import { Button } from "../Button";

const NewsCard = styled.div`
  max-width: 450px;

  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 8px;
  height: fit-content;
`;

const NewsTitle = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

const NewsImage = styled.img`
  width: inherit;
  height: 250px;
  object-fit: cover;
`;

const NewsBody = styled.div`
  width: inherit;
`;

const NewsFooter = styled.div`
  padding-top: 12px;
  border-top: 1px solid ${(props) => props.theme.colors.light};
`;

export const News = ({ body, id, pictureUrl, title }: InstanceNewsModel) => {
  return (
    <NewsCard key={id}>
      <NewsTitle>
        <Typography type="subtitle">{title}</Typography>
      </NewsTitle>

      <NewsImage alt={title} src={pictureUrl} />

      <NewsBody>
        <Typography clamp={4} ellipsis type="body">
          {body}
        </Typography>
      </NewsBody>

      <NewsFooter>
        <Button
          onClick={() => {
            console.log("clicked");
          }}
        >
          {i18n._(t`Read more`)}
        </Button>
      </NewsFooter>
    </NewsCard>
  );
};
