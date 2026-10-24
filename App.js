import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import InfoCard from './src/components/InfoCard';
import StudentScreen from './src/components/StudentScreen';

export default function App() {
  const handleDetail = (judul) => {
    Alert.alert('Detail', `Membuka detail untuk: ${judul}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Daftar Tugas (Soal 1)</Text>

        <InfoCard
          title="Tugas Matematika"
          status="selesai"
          onPress={() => handleDetail('Tugas Matematika')}
        />
        <InfoCard
          title="Tugas Pemrograman Mobile"
          status="proses"
          onPress={() => handleDetail('Tugas Pemrograman Mobile')}
        />

        <Text style={styles.sectionTitle}>Direktori Mahasiswa (Soal 2)</Text>

        <View style={styles.studentWrapper}>
          <StudentScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  studentWrapper: { height: 400 },
});