import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useSolicitation } from "../../../../hooks/solicitation";

import { Container } from "../../../../components/Layout/Container";
import { Subtitle } from "../../../../components/Typography/Subtitle";
import { Title } from "../../../../components/Typography/Title";
import Card from "../../../../components/Layout/Card";
import formatDate from "../../../../utils/formatDate";

// import { Container } from './styles';

const FiltroPorPeriodo: React.FC = () => {
  const { goBack } = useNavigation();
  const { periodo, setPeriodo } = useSolicitation();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [textDe, setTextDe] = useState("__/__/____");
  const [textAte, setTextAte] = useState("__/__/____");
  const [datepicker, setDatepicker] = useState("de");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(false);

    if (event.type !== "set") {
      return;
    }

    if (datepicker === "de") {
      setPeriodo({
        de: currentDate,
        ate: periodo?.ate,
      });
    } else if (datepicker === "ate") {
      setPeriodo({
        de: periodo?.de,
        ate: currentDate,
      });
    }
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = (dp: string) => {
    showMode("date");
    setDatepicker(dp);
  };

  useEffect(() => {
    const de = periodo?.de || null;
    const ate = periodo?.ate || null;

    if (de) {
      setTextDe(formatDate(de));
    }

    if (ate) {
      setTextAte(formatDate(ate));
    }
  }, [datepicker, periodo]);

  return (
    <>
      <Container>
        <Title>Selecione um período</Title>
        <Card style={{ flexDirection: "row", paddingBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Subtitle>De:</Subtitle>
            <Text
              style={styles.textDate}
              onPress={() => {
                showDatepicker("de");
                setDate(periodo?.de || new Date());
              }}
            >
              {textDe}
            </Text>
            <FontAwesome
              name="calendar"
              size={15}
              style={styles.calendar}
              onPress={() => {
                showDatepicker("de");
                setDate(periodo?.de || new Date());
              }}
            />
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <Subtitle>Até:</Subtitle>
            <Text
              style={styles.textDate}
              onPress={() => {
                showDatepicker("ate");
                setDate(periodo?.ate || new Date());
              }}
            >
              {textAte}
            </Text>
            <FontAwesome
              name="calendar"
              size={15}
              style={styles.calendar}
              onPress={() => {
                showDatepicker("ate");
                setDate(periodo?.ate || new Date());
              }}
            />
          </View>
        </Card>
        {show && (
          <DateTimePicker
            testID="datePicker"
            value={date}
            mode={mode}
            is24Hour
            display="default"
            onChange={onChange}
          />
        )}
      </Container>
      <View style={styles.bottom}>
        <Button
          containerStyle={styles.button}
          raised
          type="outline"
          title="Limpar"
          onPress={() => {
            setTextDe("__/__/____");
            setTextAte("__/__/____");
            setPeriodo(null);
          }}
        />
        <Button
          containerStyle={styles.button}
          raised
          title="Aplicar"
          onPress={() => goBack()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  checkBox: { backgroundColor: "white", borderColor: "white" },
  bottom: {
    flex: 0.23,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 10,
  },
  button: { width: 100 },
  textDate: { marginTop: 14, marginLeft: 10 },
  calendar: { marginLeft: 10, marginTop: 15 },
});

export default FiltroPorPeriodo;
