const names = {
    "dwarf": {
        "forenames": {
            "male": ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Breunor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"],
            "female": ["Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"]
        },
        "lastNames": ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lotgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"]
    },
    "elf": {
        "forenames": {
            "male": ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelis", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"],
            "female": ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"]

        },
        "lastNames": ["Amakiir", "Gemflower", "Amastacia", "Starflower", "Galanodel", "Moonwhisper", "Holimion", "Diamonddew", "Ilphelkiir", "Gemblossom", "Liadon", "Silverfrond", "Meliamne", "Okenheel", "Nailo", "Nightbreeze", "Siannodel", "Moonbrook", "Xiloscient", "Goldpetal"]
    },
    "human": {
        "forenames": {
            "male": ["Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim ", "Helm", "Malark", "Morn", "Randal", "Stedd", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kehur", "Thazar-De", "Urhur", "Anton", "Diero", "Marcon", "Pieron", "Rimardo", "Romero", "Salazar", "Umbero"],
            "female": ["Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra", "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis", "Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda"]

        },
        "lastNames": ["Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein", "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt", "Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi", "Pisacar", "Ramondo"]

    },
    "dragonborn": {
        "forenames": {
            "male": ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn"],
            "female": ["Akra", "Biri", "Daar", "Ferideh", "Harann", "Havilar", "Jheri", "Kava", "Korinn", "Mishann", "Nala", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit"]

        },
        "lastNames": ["Clethtinthiallor", "Daardendrian", "Delmirev", "Drachendanion", "Fenkenkabradon", "Kepeshkmolik", "Kerrhylon", "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Prexijandilin", "Shestendeliath", "Turnuroth", "Verthisathurgiesh", "Yarjerit"]

    },
    "gnome": {
        "forenames": {
            "male": ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"],
            "female": ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"]

        },
        "lastNames": ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen"]

    },
    "halfling": {
        "forenames": {
            "male": ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Welby"],
            "female": ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jilian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"]
        },
        "lastNames": ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"]

    },
    "half_orc": {
        "forenames": {
            "male": ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk"],
            "female": ["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda"]
        },
        "lastNames": ["Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein", "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt", "Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi", "Pisacar", "Ramondo"]

    },
    "half_elf": {
        "forenames": {
            "male": ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelis", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis", "Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim ", "Helm", "Malark", "Morn", "Randal", "Stedd", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "So-Kehur", "Thazar-De", "Urhur", "Anton", "Diero", "Marcon", "Pieron", "Rimardo", "Romero", "Salazar", "Umbero"],
            "female": ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia", "Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra", "Arizima", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis", "Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda"]

        },
        "lastNames": ["Amakiir", "Gemflower", "Amastacia", "Starflower", "Galanodel", "Moonwhisper", "Holimion", "Diamonddew", "Ilphelkiir", "Gemblossom", "Liadon", "Silverfrond", "Meliamne", "Okenheel", "Nailo", "Nightbreeze", "Siannodel", "Moonbrook", "Xiloscient", "Goldpetal", "Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein", "Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Anskuld", "Nathandem", "Sepret", "Uuthrakt", "Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi", "Pisacar", "Ramondo"]

    }
}

// console.log(names["half_elf"]["forenames"]["male"]);

console.log(names["half_elf"]["forenames"]["male"].length);
console.log(names["half_elf"]["forenames"]["female"]);
console.log(names["half_elf"]["lastNames"]);

// console.log(names["half_elf"].forenames["male"]);