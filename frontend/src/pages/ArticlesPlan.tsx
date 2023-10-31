import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Card, Button } from "react-bootstrap";

// Use a placeholder image from Lorem Picsum
const pageBackground = 'https://images.unsplash.com/photo-1697486235932-f6139fd72b4e?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const CardContainer = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  background-image: url(${pageBackground}); // Set the background image here
  background-size: cover;
  background-position: center;
`;

const CardHeader = styled.div`
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: backgroundAnimation 5s linear infinite;
`;

const PriceCircle = styled.div`
  border: 0.3rem solid white;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
  transition: background-color 0.3s;
`;

const PriceText = styled.p`
  font-size: 3rem;
  color: white;
  text-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
`;

const CardWrapper = styled(Card)`
  width: 14rem;
  height: 20rem;
  margin-right: 1.5rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ArticlesPlan: React.FC = () => {
    const [prices, setPrices] = useState<any[]>([]);

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const { data: response } = await axios.get("http://localhost:8080/subs/prices");
        setPrices(response.data);
    };

    const createSession = async (priceId: string) => {
        const { data: response } = await axios.post("http://localhost:8080/subs/session", { priceId, });

        window.location.href = response.url;
    };
    const backgroundColors: any = {
        Plus: "Pink",
        Pro: "lightgreen",
        Premium: "lightblue"
    };

    return (
        <Container>
            <CardContainer>
                {prices.map((price: any) => (
                    <CardWrapper key={price.nickname}>
                        <CardHeader style={{ backgroundColor: backgroundColors[price.nickname] }}>
                            <PriceCircle>
                                <PriceText>₹{price.unit_amount / 100}</PriceText>
                            </PriceCircle>
                        </CardHeader>
                        <Card.Body>
                            <Card.Title style={{ fontSize: "1.5rem" }}>
                                {price.nickname}
                            </Card.Title>
                            <Button variant="primary" className="mt-1.5" onClick={() => createSession(price.id)}>
                                Buy Now
                            </Button>
                        </Card.Body>
                    </CardWrapper>
                ))}
            </CardContainer>
        </Container>
    );
};

export default ArticlesPlan;
