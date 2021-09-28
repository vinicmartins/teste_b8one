import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import data from '../service/dados.json';
import { Button } from '@mui/material';
import red from '../assets/images/vermelho.png';
import black from '../assets/images/black.png';
import './index.css';

export default function OutlinedCard() {
  const [checkBotton, setCheckBotton] = useState(true);
  

  function verifyBottonContent() {
    if (checkBotton) {
      return (
        <Button style={{ width: "80%" }} variant="contained" color="success" onClick={() => setCheckBotton()} >
          ADICIONAR
        </Button>
      )
    } else {
      return (
        <Button style={{ width: "80%", backgroundColor: "#a9e6a7", color: "black" }} variant="contained" >
          ✔ ADICIONADO
        </Button>
      )
    }
  }

  useEffect(() => {
    verifyBottonContent()
  }, [])

  return (
    <div style={{ maxWidth: "100%", marginTop: 60, flexDirection: "row", display: "flex", justifyContent: "space-evenly" }}>
      {data.map(dados => {
        return (

          <Box sx={{ minWidth: 180, maxWidth: 270 }}>
            <Card variant="outlined">

              <React.Fragment >
                <div>
                  <div>
                    <div  class="image">
                      {
                        <>
                          <img  class="principal" style={{ padding: 22, maxWidth: 220 }} src={dados.image} />
                        </>

                      }
                    </div>
                    <div style={{ paddingRight: 22, paddingLeft: 22 }}>
                      <b style={{ fontSize: 13, color: "##000000" }}>
                        {dados.description}
                      </b>
                    </div>
                    <div style={{ padding: 22, FlexDirection: "columm" }}>
                      <div>
                        <strike style={{ fontSize: 12, color: "#808080" }}>
                          R$ {dados.cutPrice}
                        </strike>
                      </div>
                      <div>
                        <strong style={{ color: "red", fontSize: 20 }}>
                          R$ {dados.price}
                        </strong>
                      </div>
                      <div>
                        <span style={{ fontSize: 12, color: "#808080" }}>em até</span> <strong style={{ fontSize: 14 }}>{dados.installment}</strong> <span style={{ fontSize: 12, color: "#808080" }}>sem juros</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", padding: "0px 0px 22px" }}>
                      {
                        verifyBottonContent()
                      }
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </Card>
          </Box>
        )
      })
      }
    </div>
  );
}