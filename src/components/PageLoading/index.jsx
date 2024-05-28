import { Spin } from "antd";
import styled from "styled-components";
import React from "react";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(256, 256, 256, 0.5);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;


const PageLoading = () => {
    return (
        <Loading>
            <Spin />
        </Loading>
    );
};

export default PageLoading