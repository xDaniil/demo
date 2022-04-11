import { i18n } from "@lingui/core";
import { t } from "@lingui/macro";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { RouteNames } from "../../routing/RouteNames";
import { InstanceNewsModel } from "../../store/NewsStoreModel";
import { Button } from "../Button";
import { Typography } from "../Typography";

const NewsCard = styled.div`
  max-width: 500px;
  flex: 1;
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
  height: 300px;
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
  const navigate = useNavigate();

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
            navigate(`${RouteNames.NEWS}/${id}`);
          }}
        >
          {i18n._(t`Continue reading`)}
        </Button>
      </NewsFooter>
    </NewsCard>
  );
};
