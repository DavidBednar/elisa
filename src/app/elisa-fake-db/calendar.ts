import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';

export class CalendarFakeDb
{

    public static data = [
        {
            id  : 'events',
            data: [
                {
                    start    : addHours(startOfDay(new Date()), 9),
                    end      : addHours(startOfDay(new Date()), 11),
                    title    : 'Cryptography',
                    allDay   : false,
                    color    : {
                        primary  : '#ad2121',
                        secondary: '#FAE3E3'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'BC150',
                        notes   : 'Cryptography in BC150'
                    }
                },
                {
                    start    : addHours(startOfDay(new Date()), 11),
                    end      : addHours(startOfDay(new Date()), 13),
                    title    : 'Statistics',
                    allDay   : false,
                    color    : {
                        primary  : '#e3bc08',
                        secondary: '#FDF1BA'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'CD300',
                        notes   : 'Statistics in CD300'
                    }
                },
                {
                    start    : subDays(endOfMonth(new Date()), 3),
                    end      : addDays(endOfMonth(new Date()), 3),
                    title    : 'Special everyday conference',
                    allDay   : false,
                    color    : {
                        primary  : '#1e90ff',
                        secondary: '#D1E8FF'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'AB300',
                        notes   : 'Special everyday conference in AB300'
                    }
                },
                {
                    start    : addHours(startOfDay(new Date()), 13),
                    end      : addHours(startOfDay(new Date()), 15),
                    title    : 'Design and cryptanalysis of ciphers',
                    allDay   : false,
                    color    : {
                        primary  : '#e3bc08',
                        secondary: '#FDF1BA'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'CD150',
                        notes   : 'Design and cryptanalysis of ciphers in CD150'
                    }
                }
            ]
        }
    ];
}
