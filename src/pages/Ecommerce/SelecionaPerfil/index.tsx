import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-simple-toast";
import { Picker } from "@react-native-community/picker";
import { useEcommerce } from "../../../hooks/ecommerce";
import { profileService } from "../../../services/profileService";
import { schoolService } from "../../../services/schoolService";

import TopBar from "../../../components/Layout/TopBar";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import Card from "../../../components/Layout/Card";
import Button from "../../../components/Forms/Button";
import { styles } from "../../../components/Forms/Picker/styles";
import { IProfile } from "../../../interfaces/IProfiles";
import { ISchool } from "../../../interfaces/ISchools";

const SelecionaPerfil: React.FC = () => {
  const { navigate } = useNavigation();
  const { profile, setProfile, school, setSchool } = useEcommerce();
  const [profileLoading, setProfileLoading] = useState(true);
  const [schoolLoading, setSchoolLoading] = useState(true);
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [schools, setSchools] = useState<ISchool[]>([]);

  async function loadProfiles() {
    const { data } = await profileService.getProfiles();
    if (data) {
      setProfiles(data);
      setProfileLoading(false);
    }
  }

  async function loadSchools() {
    const { data } = await schoolService.getSchools();
    if (data) {
      setSchools(data);
      setSchoolLoading(false);
    }
  }

  const handleSelectProfile = (profileValue: string) => {
    const [profileSelected] = profiles.filter(
      (perfil) => perfil.value === profileValue
    );
    setProfile(profileSelected);
  };

  const handleSelectedSchool = (schoolValue: string) => {
    const [schoolSelected] = schools.filter(
      (escola) => escola.value === schoolValue
    );
    setSchool(schoolSelected);
  };

  useEffect(() => {
    loadProfiles();
    loadSchools();
  }, []);

  const perfilValidate = () => {
    if (!profile) {
      Toast.showWithGravity("Selecione um perfil", Toast.LONG, Toast.TOP);

      return;
    }

    if (!school) {
      Toast.showWithGravity("Selecione uma escola", Toast.LONG, Toast.TOP);

      return;
    }

    navigate("EcommerceRoutes", { screen: "BottomTabsRoutes" });
  };

  return (
    <Container>
      <TopBar title="E-commerce" iconBack />
      <Title>Selecione seu perfil:</Title>
      <Card>
        <View style={styles.picker}>
          <Picker
            selectedValue={profile ? profile?.value : null}
            onValueChange={(profileValue, itemIndex) =>
              handleSelectProfile(profileValue)
            }
          >
            {profileLoading ? (
              <Picker.Item label="Carregando..." value="" />
            ) : (
              profiles.map((perfil) => (
                <Picker.Item
                  key={perfil.value}
                  label={perfil.label}
                  value={perfil.value}
                />
              ))
            )}
          </Picker>
        </View>

        <View style={styles.picker}>
          <Picker
            selectedValue={school ? school?.value : null}
            onValueChange={(schoolValue, itemIndex) =>
              handleSelectedSchool(schoolValue)
            }
          >
            {schoolLoading ? (
              <Picker.Item label="Carregando..." value="" />
            ) : (
              schools.map((escola) => (
                <Picker.Item
                  key={escola.value}
                  label={escola.label}
                  value={escola.value}
                />
              ))
            )}
          </Picker>
        </View>

        <View style={{ marginTop: 20 }}>
          <Button title="Continuar" onPress={() => perfilValidate()} />
        </View>
      </Card>
    </Container>
  );
};

export default SelecionaPerfil;
