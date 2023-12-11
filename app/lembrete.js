import {useState,useEffect} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
  } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useRouter, useLocalSearchParams} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
  
function Lembrete({}) {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [reminderTitle, setReminderTitle] = useState("");
  const [reminderContent, setReminderContent] = useState("");
  const [reminderCreatedAt, setReminderCreatedAt] = useState(new Date())

  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [reminderTime, setReminderTime] = useState();

  
  function back() {
    router.back();
}

async function loadReminder(){
  var reminders = JSON.parse(await AsyncStorage.getItem("reminders"));

  var reminder = (reminders.filter((r,i) => {
    return i === Number(params.reminderIndex);
  }))[0];

  setReminderTitle(reminder.title);
  setReminderContent(reminder.content);
  setReminderCreatedAt(new Date(reminder.createdAt))
}
    
async function saveReminder() {
  createIconSetFromFontello.log(reminderDate, reminderTime);

  var date = new Date(reminderDate);
  var time = new Date(reminderTime);

  console.log
  var reminders = JSON.parse(await AsyncStorage.getItem("reminders"));

  reminders[params.reminderIndex].title = reminderTitle;
  reminders[params.reminderIndex].content = reminderContent;
  reminders[params.reminderIndex].datetime = datetime

  await AsyncStorage.setItem("reminders", JSON.stringify(reminders));
      router.back();
}

function getDate() {


function onDateTimePickerChange(event, selectedDate){
  setShowDateTimePicker(false);
  
  if(dateTimeMode === 'date'){
    setDateTime(selectedDate)
  } else

}
useEffect(() => {
  loadReminder();
}, []);

return (
  <View style={styles.container}>
    <TouchableOpacity onPress={back}>
      <SimpleLineIcons name="arrow-left" size={32} />
    </TouchableOpacity>

    <TextInput
      style={styles.title}
      placeholder="Digite o conteúdo do seu lembrete"
      value={reminderTitle}
      onChangeText={(text) => setReminderTitle(text)}
    />
    
    
    <TextInput
      textAlignVertical="top"
      multiline={true}
      style={styles.input}
      placeholder="Digite o conteúdo do seu lembrete"
      value={reminderContent}
      onChangeText={(text) => setReminderContent(text)}
    />

    <View style={styles.datetimeContainer}>
      <TouchableOpacity style={styles.datetimeButton} onPress={getDate}>
        <Text style={styles.datetimeBUttonText}> Adicionar data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.datetimeButton}>
        <Text> Adicionar data</Text>
      </TouchableOpacity>

      {show &&(
        <DateTimePicker
          testID="dateTimePicker"
          value={dateTime}
          mode={dateTimeMode}
          is24Hour={True}
          onChange={onChange}
        />
      )}


      <Text style={styles.createdAt}>
        {reminderCreatedAt.getUTCDate().toString().padStart(2, "0") + 
        "/" + 
        (Number(reminderCreatedAt.getUTCMonth().toString().padStart(2,0)) + 
        1) + 
        "/" + 
        reminderCreatedAt.getUTCFullYear() + 
        ", " + 
        reminderCreatedAt.toLocaleTimeString()}
        </Text>
    </View>

  
      <TouchableOpacity style={styles.botaoSalvar} onPress={savedReminder}>
        <Text style={styles.botaoSalvarText}>Salvar</Text>
      </TouchableOpacity>
    </View>

  
  );
}


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    position: "relative",
    },
  input: {
    backgroundColor: "#D9D9D9",
    padding: 24,
    fontSize: 18,
    borderRadius: 24,
    minHeight: 250,
    marginTop: 42,
  },
  botaoSalvar: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 24,
    marginLeft: 24,
    elevation: 10,
  },
  botaoSalvarText: {
    fontSize: 24,
    fontWeight: "700",
  },
  createdAt: {
    marginTop: 32,
    backgroundColor: "#D9D9D9",
    borderRadius: 24,
    padding: 16,
    fontSize: 12,
  },
  title: {
    width: "100%",
    padding: 12,
    fontSize: 32,
    fontWeight: "700",
    marginTop: 24,
    textAlign: "left"
  },
  datetimeContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 24,
  },
});
  
export default Lembrete;