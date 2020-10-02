/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import { CheckBox } from "react-native-elements";
import { useAuth } from "../../../hooks/auth";
import { useSolicitation } from "../../../hooks/solicitation";
import { ISolicitation } from "../../../interfaces/ISolicitations";
import solicitationService from "../../../services/solicitationService";

import ListItem from "../../../components/Layout/ListItem";
import Loader from "../../../components/Layout/Loader";
import Card from "../../../components/Layout/Card";
import { Container } from "../../../components/Layout/Container";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { Title } from "../../../components/Typography/Title";

const Realizadas: React.FC = () => {
  const { token } = useAuth();
  solicitationService.setToken(token);

  const { navigate } = useNavigation();
  const { loader, solicitations, loadSolicitations, setSolicitationDetail, setSolicitations } = useSolicitation();
  const [orderByNumber, setOrderByNumber] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [orderByDate, setOrderByDate] = useState(false);
  const [orderBySituation, setOrderBySituation] = useState(false);
  const [orderByType, setOrderByType] = useState(false);
  const [orderBySubject, setOrderBySubject] = useState(false);


  const handleClick = (solicitation: ISolicitation) => {
    setSolicitationDetail(solicitation);
    navigate("DetalhesSolciitacao");
  };

  const orderSolicitationBy = (column: string) => {
    const solicitationsSorted = [...solicitations].sort((a, b) =>{
      const situationA = a.[column].toUpperCase();
      const situationB = b.[column].toUpperCase();

      let comparison = 0;
      if (column === "data_formatada") {
        if (situationA > situationB) {
          comparison = -1;
        } else if (situationA < situationB) {
          comparison = 1;
        }
      } else {
        if (situationA > situationB) {
          comparison = 1;
        } else if (situationA < situationB) {
          comparison = -1;
        }
      }
      return comparison;
    });

    setSolicitations(solicitationsSorted);
  };

  const textStyles = { fontSize: 16, textAlign: "center", color: "#1d1d1d" };

  useEffect(() => {
    loadSolicitations();
  }, []);

  return (
    <Container>
      {!loader ? null : <Loader />}
      <ListItem
        dense
        leftElement={(
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={{ flexDirection: "column", width: 140 }}>
              <Text style={textStyles}>Ordenação</Text>
            </View>
          </TouchableOpacity>
        )}
        centerElement={<Text style={textStyles}>|</Text>}
        rightElement={(
          <TouchableOpacity onPress={() => navigate("FiltroSolicitacao")}>
            <View style={{ flexDirection: "column", width: 140 }}>
              <Text style={textStyles}>Filtros</Text>
            </View>
          </TouchableOpacity>
        )}
        style={{
          marginBottom: 5,
          borderBottomColor: "#ccc",
          elevation: 1,
        }}
      />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Solitações realizadas</Title>
        <Card>
          {!solicitations || solicitations?.length === 0 ? (
            <Subtitle>
              {loader ? "Carregando..." : "Nenhum resultado encontrado"}
            </Subtitle>
          ) : (
            solicitations.map((solicitation, index) => (
              <ListItem
                key={solicitation.slonumero}
                divider
                dense
                icon={{ name: "event" }}
                centerElement={(
                  <View style={{ flexDirection: "column", width: 240 }}>
                    <Text style={{ fontSize: 16 }}>
                      {`${solicitation.slonumero} - ${solicitation.data_formatada} `}
                    </Text>
                    <Text>{`${solicitation.tipo_objeto} - ${solicitation.assunto}`}</Text>
                    <Text>{`Status: ${solicitation.estadoDocumetno}`}</Text>
                  </View>
                )}
                style={{
                  marginBottom: 5,
                }}
                chevron
                onPress={() => handleClick(solicitation)}
              />
            ))
          )}
        </Card>
      </ScrollView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Ordenar por</Text>
          <CheckBox
            left
            title="Número da solicitação"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={orderByNumber}
            containerStyle={styles.checkBox}
            onPress={() => {
              setOrderByNumber(true);
              setOrderByDate(false);
              setOrderBySituation(false);
              setOrderByType(false);
              setOrderBySubject(false);
              orderSolicitationBy("slonumero");
              setModalVisible(false);
            }}
          />
          <CheckBox
            left
            title="Data"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={orderByDate}
            containerStyle={styles.checkBox}
            onPress={() => {
              setOrderByNumber(false);
              setOrderByDate(true);
              setOrderBySituation(false);
              setOrderByType(false);
              setOrderBySubject(false);
              orderSolicitationBy("data_formatada");
              setModalVisible(false);
            }}
          />
          <CheckBox
            left
            title="Situação"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={orderBySituation}
            containerStyle={styles.checkBox}
            onPress={() => {
              setOrderByNumber(false);
              setOrderByDate(false);
              setOrderBySituation(true);
              setOrderByType(false);
              setOrderBySubject(false);
              orderSolicitationBy("estadoDocumetno");
              setModalVisible(false);
            }}
          />
          <CheckBox
            left
            title="Tipo"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={orderByType}
            containerStyle={styles.checkBox}
            onPress={() => {
              setOrderByNumber(false);
              setOrderByDate(false);
              setOrderBySituation(false);
              setOrderByType(true);
              setOrderBySubject(false);
              orderSolicitationBy("tipo_objeto");
              setModalVisible(false);
            }}
          />
          <CheckBox
            left
            title="Assunto"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={orderBySubject}
            containerStyle={styles.checkBox}
            onPress={() => {
              setOrderByNumber(false);
              setOrderByDate(false);
              setOrderBySituation(false);
              setOrderByType(false);
              setOrderBySubject(true);
              orderSolicitationBy("assunto");
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  checkBox: { backgroundColor: "white", borderColor: "white" },
});

export default Realizadas;
