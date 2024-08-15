import * as Styles from "./styles/Main.styles";
import LogoImage from "../../asset/newLogo.png";
import React from "react";

export default function Main() {
  return (
    <Styles.Main>
      <img
        data-testid="LogoRDLogisticaImage"
        width="50"
        height="50"
        src={LogoImage}
        alt="Logo RD Logistica"
      />
    <Styles.BoxInstruction></Styles.BoxInstruction>
      <Styles.Content>
        <h1>Utilize o menu para executar a opção desejada.</h1>
      </Styles.Content>
      <Styles.Footer>
        <p>Fernando Agostinho Pereira - Todos os direitos reservados</p>
      </Styles.Footer>
      
    </Styles.Main>
  );
}
