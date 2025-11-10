import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo a Atividade 4</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        value={nome}
        onChangeText={setNome}
      />

      <Button title="Clique aqui" onPress={incrementar} />

      <Text style={styles.texto}>Cliques: {contador}</Text>

      {nome ? (
        <Text style={styles.mensagem}>
          Olá, {nome}
        </Text>
      ) : (
        <Text style={styles.mensagem}>Digite seu nome</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 18,
    marginVertical: 10,
  },
  mensagem: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
});
