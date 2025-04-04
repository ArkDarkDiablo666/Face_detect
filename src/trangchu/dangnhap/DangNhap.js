// src/trangchu/dangnhap/DangNhap.js
import React from 'react';
import styled from 'styled-components';

function DangNhap() {
  

  return (
    <Container>
      <LogoContainer>
        <img src="meme.png" alt="Logo" />
      </LogoContainer>
      <FormContainer>
        <TitleContainer>
        <h2>Đăng Nhập</h2>
        </TitleContainer>
        <form>
          <InputGroup>
            <label>Tên đăng nhập:</label>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Mật khẩu:</label>
            <Input type="password" />
          </InputGroup>
          <ButtonStyled>
            <button className="button" type="submit">
              <span className="button-content">Đăng Nhập</span>
            </button>
          </ButtonStyled>
          <a href='/quen-mat-khau' style={{color: 'black'}}><h4>Quên mật khẩu rồi chứ gì?</h4></a>
        </form>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  height: 100vh;
  background-color: #E3FDFD;
  padding: 0 20px; 
  position: relative;
  
`;

const LogoContainer = styled.div`
  margin-right: 20px; // Khoảng cách giữa logo và form
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  
  img {
    width: 400px; // Kích thước logo
    box-shadow: 0 2px 10px rgb(5, 5, 5);
  }
`;
const TitleContainer = styled.h2`
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: -20px;

  
`;


const FormContainer = styled.div`
  padding: 20px;
  margin-bottom: 60px;
  background-color: #A6E3E9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgb(5, 5, 5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 370px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  margin-right: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonStyled = styled.div`
  .button {
    background: #71C9CE;
    font-family: inherit;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
    padding: auto 20px 20px auto;
    width: 350px;
    height: 50px;
  }

  .button:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  .button:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }`;

export default DangNhap;