import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function StudentScreen() {
  const [keyword, setKeyword] = useState('');

  const filteredData = DAFTAR_MAHASISWA.filter((mhs) =>
    mhs.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f6fa',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
  },
  nama: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  prodi: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  empty: {
    textAlign: 'center',
    marginTop: 30,
    color: '#999',
    fontSize: 14,
  },
});