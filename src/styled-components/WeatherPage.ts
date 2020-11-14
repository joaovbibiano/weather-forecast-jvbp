import { ITheme } from "src/types/ITheme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NoResults = styled.h1`
  text-align: center;
`;

export const Main = styled.div`
  background-color: ${({ theme }: ITheme) => theme.colors.secondary};
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20%;
  text-align: center;
`;

export const ForecastTemperature = styled.label`
  font-size: 7rem;
  width: 100%;
  sup {
    font-size: 5rem;
  }
`;

export const ForecastDay = styled.label`
  font-size: 1.2rem;
`;
