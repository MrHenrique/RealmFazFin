import React, { useState, useCallback, useMemo } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import uuid from "react-native-uuid";
import Header from "../../components/Header";
import { getRealm } from "../../../app/models/Leite";

function Leite() {
  async function handleAddLeite() {
    const precoL = Number(precoLV)
    const prodL = Number(prodLV)
    const realm = await getRealm();
    try {
      realm.write(() => {
        const created = realm.create("LeiteSchema", {
          _id: uuid.v4(),
          precoL,
          prodL,
          description,
          createdAt: new Date(),
        });
        console.log(created);
      });
      Alert.alert("Success Creating New Task");
    } catch (e) {
      Alert.alert("Error Creating Task", e.message);
    } finally {
      realm.close();
    }
  }

  const imgbg1 = "../../../assets/bg10.jpg";
  const [description, setDescription] = useState("");
  const [precoLV, setPrecoLV] = useState("");
  const [prodLV, setProdLV] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Olá Carlos"} />
      <ScrollView>
        {/*Preco do leite*/}
        <View style={styles.containerinfos}>
          <Text style={styles.tituloinfo}>Preço atual do Leite:</Text>
          <TextInput
            style={styles.detalhe}
            value={precoLV}
            numeric
            keyboardType={"numeric"}
            onChangeText={setPrecoLV}
          />
        </View>
        {/*Produção diaria*/}
        <View style={styles.containerinfos}>
          <Text style={styles.tituloinfo}>Produção diaria:</Text>
          <TextInput
            style={styles.detalhe}
            value={prodLV}
            numeric
            keyboardType={"numeric"}
            onChangeText={setProdLV}
          />
          <TouchableOpacity style={styles.botaoselecionaranimal}>
            <Text style={styles.selecionaranimal}>Selecionar Animal</Text>
          </TouchableOpacity>
        </View>
        {/*Descrição*/}
        <View style={styles.containerinfos}>
          <Text style={styles.tituloinfo}>Descrição:</Text>
          <TextInput
            style={styles.detalhe}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.botaovoltar} onPress={handleAddLeite}>
        <Text style={styles.textovoltar}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004513",
  },
  contvoltar: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "rgba(15, 109, 0, 0.9)",
    top: 625,
  },
  botaovoltar: {
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    position: "absolute",
    top: 500,
    alignSelf: "center",
  },
  textovoltar: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  tituloinfo: {
    color: "#c4c4c4ff",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  detalhe: {
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
  },
  containerinfos: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgba(15, 109, 0, 0.7)",
    borderRadius: 8,
  },
  botaoselecionaranimal: {
    backgroundColor: "#004513",
    width: 215,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 18,
    color: "white",
  },
  selecionaranimal: {
    color: "white",
    fontSize: 20,
  },
});

export default Leite;
