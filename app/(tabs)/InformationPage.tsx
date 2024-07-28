import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { RecomendationRouteProp, TreatmentType } from './types';

interface informationPageProps {
  title: string;
  steps: Step[];
}

interface Step {
  imageUrl?: string;
  text: string;
}

const dataPage1 = {
  title: "עצירת דימום פורץ ",
  steps: [
    { imageUrl: "", text: " אתרו את מקור הדימום" },
    { imageUrl: "https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/452628673_26886425900940840_103169405409184158_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YmHw8NRe_GEQ7kNvgE6rQAH&_nc_ht=scontent.ftlv18-1.fna&oh=00_AYDwIPZEU7CMnxi6oou_Z9F8VdG5s7aF4KTCTThORnejPQ&oe=66A85440", text: " במרחק של 4 אצבעות ממקור הדימום לכיוון הלב, קשרו חתיכת בד ארוכה סביב הגפה הפגועה." },
    { imageUrl: "https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/452770638_26886426377607459_8390607746107100896_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JYENb-y4B5EQ7kNvgGaDQLz&_nc_ht=scontent.ftlv18-1.fna&oh=00_AYDts_iUB37719DqprNoZDej5mSBx1PXVHJy7HoGpzn2HA&oe=66A865AD", text: " מצאו אובייקט ארוך וחזק (כף עץ לבישול, מברשת שיער, מקל) וקשרו היטב עם הבד שקשור לגפה הפגועה." },
    { imageUrl: "https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/452935933_26886425937607503_4899382501959377733_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tq58KRXV56wQ7kNvgFKxUx4&_nc_ht=scontent.ftlv18-1.fna&oh=00_AYADFf7q2HORCcppxLTYvFrEWsvGmrw_YSo4dqx3yu1PXQ&oe=66A83480", text: " סובבו את המקל עד שנעצר הדימום. סובבו בחוזקה, הפעולה הכרחית אך כואבת למטופל." },
    { imageUrl: "https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/452677198_26886426347607462_9044509504191428919_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=h0J9GqzpmscQ7kNvgFM1IQD&_nc_ht=scontent.ftlv18-1.fna&oh=00_AYDUOGbqY9ynI6bG_CK2m1KqnAWHMHqjOX5yAOIZLWaqXw&oe=66A84682", text: " לאחר עצירת הדימום, קשרו את המקל במקומו על מנת שלא יסתובב חזרה." },
    { imageUrl: "", text: " כתבו את השעה בה הונח החסם, נסו לפנות את המטופל לקבלת טיפול רפואי נוסף בהקדם." }
  ]
};

const dataPage2 = {
  "title": "עלפון",
  "steps": [{"imageUrl":"https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/452917918_26886808550902575_8364559473247822473_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gWE4AIUp0zgQ7kNvgGouXwr&_nc_ht=scontent.ftlv18-1.fna&oh=00_AYDP2Jln0dBzZFIfzhFb60xpz6CsFt2R_rjvy4d3wQ6GjA&oe=66A84E9F","text":" השכיבו את המטופל על הרצפה במקום בטוח"}, 
  {"imageUrl":"https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/452759113_26886808540902576_1980773492870518151_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wJYXneBAt44Q7kNvgEqTEsU&_nc_ht=scontent.ftlv18-1.fna&oh=00_AYCAZ5C-QHjM6lkj5fO_RheX1tXL6ILOvi9iLFfTj8vnzg&oe=66A85002","text":" הרימו את רגלי המטופל ב30 מעלות מהרצפה."},
  {"imageUrl":"","text":" אין לסטור למטופל או להתיז עליו מים!"},
{"imageUrl":"","text":"אם המטופל מפסיק לנשום, יש לעבור לבצע החייאה."}]
}

const dataPage3 = {
  "title": "כוויות",
  "steps": [{"imageUrl":"","text":"1. יש להסיר למטופל בגדים, תכשיטים וטבעות (במידה ולא נצמדו לעור)"}, 
  {"imageUrl":"https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/452759113_26886808540902576_1980773492870518151_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wJYXneBAt44Q7kNvgEqTEsU&_nc_ht=scontent.ftlv18-1.fna&oh=00_AYCAZ5C-QHjM6lkj5fO_RheX1tXL6ILOvi9iLFfTj8vnzg&oe=66A85002","text":"2. יש לשטוף את אזור הכוויה במים קרים."},
  {"imageUrl":"","text":"3. אם הכוויה מדממת, אם אפשרי עצרו את הדימום באמצעות תחבושת. אחרת, בצעו חסם עורקים."},
  {"imageUrl":"","text":"4. אם ניתן, חבשו את אזור הכוויה עם תחבושת ייעודית לכוויות"}]
}

const dataPage4 = {
  "title": "פרכוסים",
  "steps": [{"imageUrl":"","text":"1. הרחיקו חפצים קרובים שיכולים לפגוע במטופל"}, 
  {"imageUrl":"","text":"2. שימו כרית מתחת לראש המטופל והשכיבו אותו על הצד."},
  {"imageUrl":"","text":"3.  השתדלו לשמור על נתיב אוויר פתוח באמצעות ההטייה הצידה. אין להכניס אצבעות או כל עצם אחר לפיו של המטופל!"},
  {"imageUrl":"","text":"4. כשנגמר ההתקף - נקו הפרשות מחלל האף והפה של המטופל."}]
}

const dataPage5 = {
  "title": "החייאה",
  "steps": [{"imageUrl":"https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/453061754_26890491793867584_9156661940199804362_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kX7JVChMexAQ7kNvgGxSXAt&_nc_ht=scontent-fra3-2.xx&oh=00_AYDg9HNzQVDNfUjj7WOxDJqNEUfnGPdSAYR_7W6yMPQ2Zw&oe=66A89D94","text":"  בצעו לחיצות חזה בקצב של 100 עיסויים בדקה. לחצו עמוק וחזק."}, 
  {"imageUrl":"https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/452893001_26890525693864194_1380067944165110420_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EMgSTvkvrJ8Q7kNvgGo91ln&_nc_ht=scontent-fra3-1.xx&oh=00_AYA20J5mB7IKFEOMw5Yc_a1rXhRyQ0WaC53MM-QIFohnDA&oe=66A8AC49","text":"נסו להשיג דפיברילטור בהקדם! אם מגיע דפיברילטור בכל שלב יש לפעול לפי הנחיותיו."},
  {"imageUrl":"","text":" בצעו 30 עיסויים ולאחר מכן, אם ברשותכם מסיכת כיס בצעו 2 הנשמות. אחרי חמישה סבבים עצרו להערכה מחודשת.  "},
  {"imageUrl":"https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/452695538_26890580890525341_2987763132537391063_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IH8K3h98rpAQ7kNvgEjkxfW&_nc_ht=scontent-fra5-1.xx&oh=00_AYANJ-pLGzs5moZV3tHZaOGqCgmRvAacNdA-K8yoK5nppg&oe=66A8AC01","text":" אם יש הפרשות בפיו של המטופלת נקו אותם והמשיכו בביצוע עיסויים.  "},
  {"imageUrl":"","text":" אם המטופל מתחיל לזוז או לנשום, יש לשמור על נתיב האוויר שלו פתוח באמצעות הרמת הראש אחורה עד להגעת צוות רפואי."}]
}



interface RecomendationProps {
  route: RecomendationRouteProp;
}

const getTreatMentData = (treatmentType: TreatmentType): informationPageProps => {
  switch (treatmentType) {
    case TreatmentType.Anxiety:
      return dataPage1;
    case TreatmentType.Bleeden:
      return dataPage2;
    case TreatmentType.Burns:
      return dataPage1; // UPDATE
    case TreatmentType.CPR:
      return dataPage5; // UPDATE
    case TreatmentType.Fainting:
      return dataPage2; // UPDATE
    case TreatmentType.Siezures:
      return dataPage5; // UPDATE
    case TreatmentType.Stroke:
      return dataPage5; // UPDATE
    case TreatmentType.Choke:
      return dataPage5; // UPDATE
    case TreatmentType.ChestPains:
      return dataPage5; // UPDATE
    case TreatmentType.Allergies:
      return dataPage5; // UPDATE
    case TreatmentType.Het:
      return dataPage1;
    default:
      return dataPage2;
  }
}

const InformationPage = ({ route }: RecomendationProps) => {
  const { treatmentType } = route?.params;
  const data = getTreatMentData(treatmentType);
  const { title, steps } = data;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.userName}>{title}</Text>
        <View style={styles.stepsContainer}>
          {steps.map((step: Step, index: number) => (
            <View key={index} style={styles.stepContainer}>
              <Text style={styles.stepText}>{step.text}</Text>
              {!!step.imageUrl && (
                <Image
                  style={styles.image}
                  source={step.imageUrl}
                  placeholder={'Keshet'}
                  contentFit="cover"
                />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFEBEB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  stepsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  stepContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  stepText: {
    textAlign: 'right',
    marginBottom: 8,
    fontSize: 16,
    fontFamily: 'Noto Sans Hebrew',
    //alignItems: 'center',
    //alignContent: 'center',
  },
  image: {
    height: 200,
    width: '100%',
    backgroundColor: '#0553',
  },
  userName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    fontFamily: 'Noto Sans Hebrew',
  },
});

export default InformationPage;
