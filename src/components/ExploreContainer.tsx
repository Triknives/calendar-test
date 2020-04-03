import React from 'react';
import './ExploreContainer.css';
import GoogleBtn from '../components/GoogleBtn';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div> 
      <IonItem> 
        {name}
      </IonItem>
      <IonItem>
         <GoogleBtn />
      </IonItem>
    
    </div>
  );
};

export default ExploreContainer;
