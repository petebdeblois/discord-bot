const schedule = {
    "Claw of Jormag": ["22:30", "2:30", "4:30", "9:30", "14:30", "18:00"],
    "Fire Elemental": ["20:45", "22:45", "0:45", "2:45", "4:45", "6:45", "8:45", "10:45", "12:45", "14:45", "16:45", "18:45", ],
    "Golem Mark II": ["21:30", "2:00", "4:00", "9:00", "13:30", "17:30"],
    "Great Jungle Wurm": ["23:00", "8:30", "14:00"],
    "Jungle Wurm": ["19:15", "21:15", "23:15", "1:15", "3:15", "5:15", "7:15", "9:15", "10:15", "11:15", "13:15", "15:15", "17:15"],
    "Karka Queen": ["21:00", "6:30", "12:00"],
    "Megadestroyer": ["19:00", "0:00", "5:30", "10:30", "15:30"],
    "Modniir Ulgoth": ["20:30", "1:30", "3:30", "8:00", "12:30", "17:00"],
    "Shadow Behemoth": ["19:45", "21:45", "23:45", "1:45", "3:45", "5:45", "7:45", "9:45", "11:45", "13:45", "15:45", "17:45", ],
    "Svanir Shaman": ["0:15", "2:15", "4:15", "6:15", "8:15", "12:15", "14:15", "16:15", "18:15", "20:15", "22:15"],
    "Taidha Covington": ["5:00", "10:00", "15:00", "18:30", "23:30"],
    "Tequatl": ["7:30", "13:00", "22:00"],
    "The Shatterer": ["1:00", "3:00", "7:00", "11:30", "16:30", "20:00"],
};

function getHours() {
    let getNow = new Date();
    let hours = getNow.getHours();
    let minutes = getNow.getMinutes();
    let time = `"${hours}:${minutes}"`;
    return time;
}
const timeDiff = [];

for (let key in schedule) {
    if (schedule.hasOwnProperty(key)) {
        console.log(key + " -> " + schedule[key]);
    }
}


for (let i = 0; i < 3; i++) {
    console.log(timeDiff[i].hour);
}
