import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
}

type ZoomedOutCardProps = {
  zoom: number;
};

const CardsContainer = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div<ZoomedOutCardProps>`
  height: ${({ zoom }) => 27.6 * zoom}rem;
  width: ${({ zoom }) => 18 * zoom}%;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.2);
  padding: ${({ zoom }) => 0.95 * zoom}rem;
  border-radius: ${({ zoom }) => 0.95 * zoom}rem;
  margin: ${({ zoom }) => 1.9 * zoom}rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img<ZoomedOutCardProps>`
  width: 100%;
  height: 50%;
  border-radius: 0.95rem;

  /* Hover effect */
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1); /* Scale the image on hover */
  }
`;

const Header = styled.h2<ZoomedOutCardProps>`
  font-size: ${({ zoom }) => 0.98 * zoom}rem;
  margin: ${({ zoom }) => 0.49 * zoom}rem 0;
  text-align: center;
`;

const Content = styled.p<ZoomedOutCardProps>`
  font-size: ${({ zoom }) => 0.88 * zoom}rem;
  text-align: center;
`;

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data: response } = await axios.get("http://localhost:8080/articles");
      setArticles(response);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  // Define the zoom factor (98% zoom)
  const zoom = 0.98;

  return (
    <Container>
      {articles.length ? (
        <CardsContainer>
          {articles.map((article) => (
            <Card key={article.id} zoom={zoom}>
              <Image src={article.imageUrl} zoom={zoom} />
              <Header zoom={zoom}>{article.title}</Header>
              <Content zoom={zoom}>{article.content}</Content>
            </Card>
          ))}
        </CardsContainer>
      ) : (
        <div>You don't have a plan</div>
      )}
    </Container>
  );
};

export default Articles;
