var Bot = new Unit("Bot", 1.5, 4, {
    2 : charecteristics(132, 162, 2000),
    3 : charecteristics(132+39, 195, 3000),
    5 : charecteristics(303, 281, 5000),
    6 : charecteristics(319, 295, 6000) // 250000
});

var Bat = new Unit("Bat", 0.9, 6, {
    1 : charecteristics(188, 300, 750),
    2 : charecteristics(199, 330, 1500),
    4 : charecteristics(249, 400, 3500),
    5 : charecteristics(297, 450, 4500),
    6 : charecteristics(297+71, 510, 5500) // 250k xp
});

var Levithian = new Unit("Levithian", 2, 5,  {
    2 : charecteristics(25, 650, 1000),
    3 : charecteristics(35, 780, 2000),
    6 : charecteristics(73, 1700, 5000)
});

var Cruiser = new Unit("Cruiser", 1.5, 20,{
    1 : charecteristics(250, 3400, 35000),
    2 : charecteristics(283, 3800, 42500),
    3 : charecteristics(323, 4150, 50000),
    4 : charecteristics(356, 4500, 57500),
    5 : charecteristics(356 + 39, 4800, 57500 + 7500) // 400k xp
    6 : charecteristics(395 + 40, 4800 + 350,  65000 + 5000) // 600k xp  
});

var Widow = new Unit("Widow", 2.4, 25, {
    1 : charecteristics(63, 7500, 95),
    2 : charecteristics(76, 8500, 110),
    6 : charecteristics(116, 11550, 195)
});

var Plasmon = new Unit("Plasmon", 2.5, 25, {
    1 : charecteristics(427, 5000, 40000),
    2 : charecteristics(488, 5600, 50000),
    3 : charecteristics(538, 6300, 57500),
    4 : charecteristics(608, 7250, 65000),
    5 : charecteristics(678, 8000, 70000),
    6 : charecteristics(748, 8800, 77500)
});

var Pulsar  = new Unit("Pulsar", 4, 5, {
    5 : charecteristics(248, 900, 6400),
    6 : charecteristics(248+62, 1150, 6400+1700) //100k xp
});

var Anhillator = new Unit("Anhillator", 1.5 ,5, {
    1: charecteristics(111, 162, 3000),
    2: charecteristics(158, 195, 4500),
    4: charecteristics(269, 281, 7500),
    5: charecteristics(269+95, 281+56, 9000) // 200k xp
});