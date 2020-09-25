import React, { useState } from "react";
import { WebView } from "react-native-webview";

import { Container } from "../../../components/Layout/Container";
import Loader from "../../../components/Layout/Loader";

const RelatorioObras: React.FC = () => {
  return (
    <Container>
      <WebView
        source={{
          uri:
            "https://app.powerbi.com/view?r=eyJrIjoiZGY4YWUxYjgtMWIzMy00M2QwLWFkNTUtYWIwYTlkZjEzZDRkIiwidCI6IjE2Yjg3Nzk4LTQ1MTctNDQyYy05MjAwLWNlMWNjYTkzMjU5YyIsImMiOjR9",
        }}
      />
    </Container>
  );
};

export default RelatorioObras;
