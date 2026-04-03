# partiel-design-pattern

J'ai choisi le pattern Observer car il y a plusieurs canaux de notification qui doivent réagir aux mêmes événements. Au lieu de coder en dur chaque notification, le NotificationManager centralise les abonnements et dispatche les événements à tous les canaux concernés.  
Cela permet d'ajouter facilement un nouveau canal sans toucher au code existant, et de configurer quels canaux sont abonnés à quels événements.

Pour tester mon projet : je lance l'index.html et j'ouvre la console
<img width="662" height="106" alt="image" src="https://github.com/user-attachments/assets/57e1faa2-cf04-4f45-8863-adc1cd4c721c" />

